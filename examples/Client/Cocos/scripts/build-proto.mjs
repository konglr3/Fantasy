/**
 * 将 Config/NetworkProtocol/Outer/*.proto 规范化后，用 pbjs/pbts 生成静态模块
 * （对齐 oops-net assets/script/libs/proto/output 的 static-module 格式）。
 *
 * 裁剪：去掉 create / verify / convert / delimited / getTypeUrl / JSDoc。
 * 过滤：仅保留 ProtoOuterDispatcherInit 注册的消息及其依赖类型。
 *
 * 输出：
 *   assets/scripts/proto/pb/outer_pb.js
 *   assets/scripts/proto/pb/outer_pb.d.ts
 *   assets/scripts/proto/pb/index.ts
 *
 * 环境变量：
 *   PROTO_FULL=1  — 不过滤消息（生成 Outer 全量）
 */
import { execFileSync } from 'child_process';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import protobuf from 'protobufjs';

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
// examples/Client/Cocos -> examples/Config/NetworkProtocol/Outer
const outerSrcDir = join(root, '../../Config/NetworkProtocol/Outer');
const outDir = join(root, 'assets/scripts/proto/pb');
const tmpDir = join(root, '.tmp-proto-build');
const dispatcherInitPath = join(root, 'assets/scripts/proto/ProtoOuterDispatcherInit.ts');
const fullBundle = process.env.PROTO_FULL === '1';

/** 与 Fantasy.Cocos normalizeFantasyProtoSource 保持一致 */
function normalizeFantasyProtoSource(source) {
  return source
    .replace(/\brepeated(?:List|Array)\s+byte\b/g, 'bytes')
    .replace(/\brepeated(?:List|Array)\s+(\w+)/g, 'repeated $1')
    .replace(/(\w+\s*=\s*-?\d+)\s*,/g, '$1;')
    .replace(/(\w+\s*=\s*-?\d+)\s*(?=\r?\n\s*})/g, '$1;');
}

function resolveBin(name) {
  return require.resolve(`protobufjs-cli/bin/${name}`);
}

/** 从 DispatcherInit 收集已注册消息短名 */
function collectClientMessageSeeds(initPath) {
  if (!existsSync(initPath)) {
    console.warn('[build:proto] DispatcherInit missing, skip message filter:', initPath);
    return null;
  }
  const src = readFileSync(initPath, 'utf8');
  const seeds = new Set();
  const re = /\.register\s*\(\s*[^,]+,\s*['"]([^'"]+)['"]\s*\)/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const name = m[1];
    // 取短名：Fantasy.Network.Message.C2G_X → C2G_X
    const short = name.includes('.') ? name.split('.').pop() : name;
    if (short) {
      seeds.add(short);
    }
  }
  return [...seeds].sort();
}

/**
 * 按种子消息保留依赖（含嵌套 package），其余从 Root 删除。
 * pbjs 自带 --filter 只支持一层 package，无法处理 Fantasy.Network.Message。
 */
function pruneRootToClientMessages(pbRoot, seedNames) {
  pbRoot.resolveAll();
  const keep = new Set();

  function mark(type) {
    if (!type || keep.has(type.fullName)) {
      return;
    }
    keep.add(type.fullName);
    if (typeof type.fieldsArray !== 'undefined') {
      for (const field of type.fieldsArray) {
        if (field.resolvedType) {
          mark(field.resolvedType);
        }
      }
    }
    if (type.nestedArray) {
      for (const nested of type.nestedArray) {
        if (nested instanceof protobuf.Type || nested instanceof protobuf.Enum) {
          mark(nested);
        }
      }
    }
  }

  const missing = [];
  for (const name of seedNames) {
    const candidates = [
      name,
      `Fantasy.Network.Message.${name}`,
      `.${name}`,
      `.Fantasy.Network.Message.${name}`,
    ];
    let found = null;
    for (const c of candidates) {
      try {
        found = pbRoot.lookupTypeOrEnum(c);
        if (found) {
          break;
        }
      } catch {
        // try next
      }
    }
    if (!found) {
      missing.push(name);
      continue;
    }
    mark(found);
  }

  if (missing.length) {
    console.warn('[build:proto] seeds not found in protos:', missing.join(', '));
  }

  function pruneNs(ns) {
    if (!ns.nested) {
      return;
    }
    for (const key of Object.keys(ns.nested)) {
      const child = ns.nested[key];
      if (child instanceof protobuf.Type || child instanceof protobuf.Enum) {
        if (!keep.has(child.fullName)) {
          delete ns.nested[key];
          ns._nestedArray = null;
        }
      } else if (child instanceof protobuf.Namespace) {
        pruneNs(child);
        const left = child.nestedArray ? child.nestedArray.length : 0;
        if (left === 0) {
          delete ns.nested[key];
          ns._nestedArray = null;
        }
      }
    }
  }

  pruneNs(pbRoot);
  console.log(
    `[build:proto] kept ${keep.size} types/enums from ${seedNames.length} client seeds`
  );
}

/**
 * pbts 默认不 export 嵌套 namespace/class，导致 OuterPbMsg 的 keyof 解析失败、
 * 类型退化成 Record。补上 export 以便 Fantasy.Network.Message.G2C_* 可被索引。
 */
function exportNestedProtoTypes(dts) {
  let out = dts;
  // pbts 在 `{` 与 `namespace` 之间会插注释，不能只匹配紧邻换行
  out = out.replace(/^([ \t]*)namespace Network \{/m, '$1export namespace Network {');
  out = out.replace(/^([ \t]*)namespace Message \{/m, '$1export namespace Message {');
  // Message 内成员补 export（避免重复）
  out = out.replace(
    /^([ \t]{12,})(?!export )(interface|class|enum) /gm,
    '$1export $2 '
  );
  return out;
}

/**
 * 给 pbts 生成的 I*Response / *Response 补上 Fantasy 框架 errorCode。
 * （.proto 通常不写该字段，由服务端 IResponse 注入）
 */
function injectFantasyResponseErrorCode(dts) {
  let out = dts;

  // interface / export interface IFooResponse { ... }
  out = out.replace(
    /^([ \t]*)(export )?interface (I\w+Response) \{([^}]*)\}/gm,
    (full, lineIndent, exportKw, name, body) => {
      if (/\berrorCode\b/.test(body)) {
        return full;
      }
      const fieldIndent = `${lineIndent}    `;
      // 去掉仅缩进的尾行（原 `}` 前空白），避免 `}` 错位
      let rest = body.replace(/^\r?\n/, '').replace(/(?:^|\n)[ \t]*$/, '');
      if (rest.length > 0 && !rest.endsWith('\n')) {
        rest += '\n';
      }
      const exp = exportKw || '';
      return `${lineIndent}${exp}interface ${name} {\n${fieldIndent}/** Fantasy IResponse 框架错误码 */\n${fieldIndent}errorCode?: (number|null);\n${rest}${lineIndent}}`;
    }
  );

  // class / export class FooResponse implements ...IFooResponse {
  out = out.replace(
    /^([ \t]*)(export )?class (\w+Response) implements (?:[\w.]+\.)?(I\3) \{/gm,
    (full, lineIndent) => {
      const fieldIndent = `${lineIndent}    `;
      return `${full}\n${fieldIndent}/** Fantasy IResponse 框架错误码 */\n${fieldIndent}public errorCode: number;\n`;
    }
  );

  return out;
}

if (!existsSync(outerSrcDir)) {
  console.error('[build:proto] Outer proto dir not found:', outerSrcDir);
  process.exit(1);
}

const protoFiles = readdirSync(outerSrcDir).filter((f) => f.endsWith('.proto'));
if (protoFiles.length === 0) {
  console.error('[build:proto] no .proto files in', outerSrcDir);
  process.exit(1);
}

rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });
mkdirSync(outDir, { recursive: true });

const normalizedPaths = [];
for (const f of protoFiles) {
  const src = readFileSync(join(outerSrcDir, f), 'utf8');
  const out = join(tmpDir, f);
  writeFileSync(out, normalizeFantasyProtoSource(src), 'utf8');
  normalizedPaths.push(out);
  console.log('[build:proto] normalized', f);
}

const jsOut = join(outDir, 'outer_pb.js');
const dtsOut = join(outDir, 'outer_pb.d.ts');
const pbjs = resolveBin('pbjs');
const pbts = resolveBin('pbts');

/**
 * pbjs 静态模块裁剪：客户端只需 encode/decode。
 * 注意：不能对「给 pbts 用的」产物加 --no-comments，否则 d.ts 几乎为空。
 */
const trimFlags = [
  '--no-create',
  '--no-verify',
  '--no-convert',
  '--no-delimited',
  '--no-typeurl',
];

let pbjsInputPaths = normalizedPaths;

if (!fullBundle) {
  const seeds = collectClientMessageSeeds(dispatcherInitPath);
  if (seeds && seeds.length > 0) {
    const pbRoot = new protobuf.Root();
    // sync load keeps script simple (no top-level await needed)
    protobuf.loadSync(normalizedPaths, pbRoot);
    pruneRootToClientMessages(pbRoot, seeds);
    const jsonPath = join(tmpDir, 'outer.pruned.json');
    writeFileSync(jsonPath, JSON.stringify(pbRoot.toJSON(), null, 2), 'utf8');
    pbjsInputPaths = [jsonPath];
    console.log('[build:proto] wrote pruned descriptor', jsonPath);
  }
} else {
  console.log('[build:proto] PROTO_FULL=1 — generating all Outer messages');
}

const pbjsBaseArgs = [
  pbjs,
  '-t',
  'static-module',
  '-w',
  'commonjs',
  // Creator 需要带 .js 后缀才能解析 npm 子路径（见官方 protobuf 示例）
  '--dependency',
  'protobufjs/minimal.js',
  '-r',
  'FantasyOuter',
  '--keep-case',
  ...trimFlags,
];

// 带 JSDoc 的中间产物：供 pbts 解析类型
const jsForDts = join(tmpDir, 'outer_pb.for-dts.js');
execFileSync(process.execPath, [...pbjsBaseArgs, '-o', jsForDts, ...pbjsInputPaths], {
  stdio: 'inherit',
});
execFileSync(process.execPath, [pbts, '-o', dtsOut, jsForDts], { stdio: 'inherit' });

// 运行时产物：去掉注释以减小体积
execFileSync(
  process.execPath,
  [...pbjsBaseArgs, '--no-comments', '-o', jsOut, ...pbjsInputPaths],
  { stdio: 'inherit' }
);

{
  let dts = readFileSync(dtsOut, 'utf8');
  const beforeExport = dts;
  dts = exportNestedProtoTypes(dts);
  if (dts !== beforeExport) {
    console.log('[build:proto] exported Fantasy.Network.Message nested types');
  }
  const beforeErr = dts;
  dts = injectFantasyResponseErrorCode(dts);
  if (dts !== beforeErr) {
    console.log('[build:proto] injected errorCode into *Response types');
  }
  writeFileSync(dtsOut, dts, 'utf8');
}

// Creator 脚本为 ESM：用 import 加载 commonjs 静态模块（不要用 require）
writeFileSync(
  join(outDir, 'index.ts'),
  `/* eslint-disable */
// 由 npm run build:proto 生成，请勿手改。
import protobuf from 'protobufjs';
// CJS module.exports → ESM default（Creator / allowSyntheticDefaultImports）
import outerPb from './outer_pb.js';

/** pbjs -r FantasyOuter 注册名 */
export const OUTER_PB_ROOT_NAME = 'FantasyOuter';

/** 静态命名空间（非反射 Root；ProtoOuterDispatcher 已兼容） */
export function getOuterProtoRoot(): Record<string, unknown> {
  const fromRoots = (protobuf.roots as Record<string, Record<string, unknown> | undefined>)[
    OUTER_PB_ROOT_NAME
  ];
  if (fromRoots) {
    return fromRoots;
  }
  if (outerPb && typeof outerPb === 'object') {
    return outerPb as Record<string, unknown>;
  }
  throw new Error(
    '[outer_pb] protobuf.roots.FantasyOuter missing；请确认 outer_pb.js 已加载'
  );
}

export default getOuterProtoRoot;
`,
  'utf8'
);

rmSync(tmpDir, { recursive: true, force: true });
const jsBytes = readFileSync(jsOut).length;
console.log('[build:proto] wrote', jsOut, `(${jsBytes} bytes)`);
console.log('[build:proto] wrote', dtsOut);
console.log('[build:proto] wrote', join(outDir, 'index.ts'));
