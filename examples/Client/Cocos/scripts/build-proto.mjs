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
