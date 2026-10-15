/**
 * 将 Config/NetworkProtocol/Outer/*.proto 规范化后，用 pbjs/pbts 生成静态模块
 * （对齐 oops-net assets/script/libs/proto/output 的 static-module 格式）。
 *
 * 输出：
 *   assets/scripts/proto/pb/outer_pb.js
 *   assets/scripts/proto/pb/outer_pb.d.ts
 *   assets/scripts/proto/pb/index.ts
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

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
// examples/Client/Cocos -> examples/Config/NetworkProtocol/Outer
const outerSrcDir = join(root, '../../Config/NetworkProtocol/Outer');
const outDir = join(root, 'assets/scripts/proto/pb');
const tmpDir = join(root, '.tmp-proto-build');

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

execFileSync(
  process.execPath,
  [
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
    '-o',
    jsOut,
    ...normalizedPaths,
  ],
  { stdio: 'inherit' }
);

execFileSync(process.execPath, [pbts, '-o', dtsOut, jsOut], { stdio: 'inherit' });

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
console.log('[build:proto] wrote', jsOut);
console.log('[build:proto] wrote', dtsOut);
console.log('[build:proto] wrote', join(outDir, 'index.ts'));
