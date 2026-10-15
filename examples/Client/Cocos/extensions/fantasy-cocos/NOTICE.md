# fantasy-cocos 扩展注意

`assets/` 目录由以下命令从源码包**镜像**生成，不要在此目录长期改代码：

```bash
npm run link:fantasy-cocos
# 或：npm install（postinstall 会执行）
```

- **源码权威路径：** `Fantasy.Packages/Fantasy.Cocos/src`
- **镜像目标：** `examples/Client/Cocos/extensions/fantasy-cocos/assets`
- **业务引用：** `import { ... } from 'db://fantasy-cocos/...'`

## 为何必须镜像（不能用联接 / 软链接）

Cocos Creator 的 `asset-db` **无法**通过 junction / symlink 正确解析扩展内脚本。若对 `assets` 做目录联接，预览会出现：

```text
找不到模块 "db://fantasy-cocos/..."
```

因此 `assets` 必须是真实文件；`.gitignore` 已忽略该目录，改完 Packages 源码后重新执行 `link:fantasy-cocos`，并在编辑器中刷新扩展 / 资源。

## 相关文件

| 文件 | 说明 |
|------|------|
| `package.json` | 扩展名 `fantasy-cocos`，`asset-db.mount` → `./assets` |
| `main.js` | 纯资源扩展，无编辑器逻辑 |
| `../../scripts/link-fantasy-cocos-extension.mjs` | 镜像脚本 |
