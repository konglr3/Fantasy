/**
 * 将 Fantasy.Packages/Fantasy.Cocos/src 同步到
 * extensions/fantasy-cocos/assets（真实文件，非联接）。
 *
 * Creator 的 asset-db 无法通过 junction/symlink 解析 db:// 脚本
 * （会报：找不到模块 "db://fantasy-cocos/..."），因此必须落盘到扩展 assets。
 * 源码仍以 Fantasy.Packages/Fantasy.Cocos/src 为准，本脚本只做镜像。
 */
import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const extDir = join(root, 'extensions', 'fantasy-cocos');
const dst = join(extDir, 'assets');
const src = join(root, '../../../Fantasy.Packages/Fantasy.Cocos/src');

if (!existsSync(join(extDir, 'package.json'))) {
  console.error('[link:fantasy-cocos] missing extension package.json:', extDir);
  process.exit(1);
}

if (!existsSync(src)) {
  console.error('[link:fantasy-cocos] Fantasy.Cocos src not found:', src);
  process.exit(1);
}

rmSync(dst, { recursive: true, force: true });
mkdirSync(dst, { recursive: true });
cpSync(src, dst, {
  recursive: true,
  filter: (from) => {
    const n = from.replace(/\\/g, '/');
    // 排除协议导出目录 /proto（勿误伤 /protobuf）
    if (n.endsWith('/proto') || n.includes('/proto/')) return false;
    if (n.endsWith('HttpManager.ts') || n.endsWith('HttpManager.ts.meta')) return false;
    return true;
  },
});

console.log('[link:fantasy-cocos] synced ->', dst);
console.log('[link:fantasy-cocos] import: db://fantasy-cocos/index');
