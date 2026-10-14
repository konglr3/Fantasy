# Fantasy Cocos Creator 客户端示例

运行时通过 **Cocos 扩展** `extensions/fantasy-cocos` 提供（`asset-db` 挂载）。

> Creator **不支持**用 junction/symlink 挂扩展脚本资源，否则预览会报  
> `找不到模块 "db://fantasy-cocos/..."`。  
> 因此 `npm run link:fantasy-cocos` 会把 `Fantasy.Packages/Fantasy.Cocos/src` **镜像**到  
> `extensions/fantasy-cocos/assets`（源码仍以 Packages 为准，勿在扩展 assets 里长期改）。

业务脚本：

```ts
import { netChannel, NetConfig } from 'db://fantasy-cocos/index';
import { ProtoOuterDispatcher } from 'db://fantasy-cocos/protobuf/index';
```

## 目录

```text
extensions/
  fantasy-cocos/
    package.json / main.js
    assets/                      # 由 link 脚本从 Fantasy.Cocos/src 同步
assets/
  scripts/
    fantasy/FantasyNetChannelDemo.ts
    proto/                       # ProtocolExportTool 导出
  resources/
    proto/OuterMessage.txt
```

## 1. 安装 & 同步扩展资源

```bash
cd examples/Client/Cocos
npm install
# 等价于：npm run link:fantasy-cocos
```

改了 `Fantasy.Packages/Fantasy.Cocos/src` 后重新执行一次 `npm run link:fantasy-cocos`，并在编辑器里刷新扩展/资源。

## 2. 启用扩展

**扩展 → 扩展管理器** 确认 `fantasy-cocos` 已启用；资源管理器应出现 `fantasy-cocos` 包。

## 3. 导出协议

```bash
dotnet run --project Fantasy.Packages/Fantasy.ProtocolExportTool -- export -S --config examples/Tools/ProtocolExportTool/ExporterSettings.json
```

## 4. 运行

1. Creator 3.8.x 打开本工程  
2. 场景挂载 `FantasyNetChannelDemo`  
3. 启动 Gate（默认 `127.0.0.1:20000`）  
4. 预览

## Demo 覆盖

`FantasyNetChannelDemo` 对齐服务端三个目录：

| 服务端 | 客户端 |
|--------|--------|
| `HTTPHandler` | `demoHttpHandlerExamples`（`/api/Hello/greet`、`/api/Users/...`、`/api/Products`） |
| `Outer/NormalMessage` | send `C2G_TestMessage` / call `C2G_TestRequest` / send `C2G_TestRequestPushMessage` → on `G2C_PushMessage` |
| `Outer/Roaming/Chat` | call `C2G_ConnectRoamingRequest` 后 send/call `C2Chat_*` |

HTTP 需 Scene 配置 `NetworkProtocol=HTTP` 并监听组件上的 `httpBaseUrl`（默认 `http://127.0.0.1:8080`）。
