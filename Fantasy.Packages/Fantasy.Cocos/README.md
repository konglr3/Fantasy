# Fantasy.Cocos

面向 **Cocos Creator 3.x** 的 Fantasy **客户端** TypeScript 包，与 `Fantasy.Unity` / `Fantasy.Net` 的外网包格式保持一致。

## 功能

- 外网包头定义与组包解包（`PacketConstants` / `encodeOuterFrame` / `OuterStreamReassembler`）
- `WebSocketSession` / `FantasyRuntime`（底层一键连接）
- `src/net`：业务网络层（重连、心跳、RPC 队列、Tips），已适配 Fantasy Outer
- `fantasy-cocos/protobuf`：`ProtoOuterDispatcher` 按 opcode 编解码
- `src/proto`：协议导出工具默认输出目录（TypeScript 类型 + OpCode + DispatcherInit）

## 协议导出

使用 `Fantasy.ProtocolExportTool` 或 `Fantasy.ProtocolEditor`：

1. 配置 `NetworkProtocolTypeScriptClientDirectory`（默认可填 `../Fantasy.Cocos/src/proto`）
2. 导出后生成 `OuterOpcode.ts` / `OuterMessage.ts` / `ProtoOuterDispatcherInit.ts` 等
3. 客户端用 `protobufjs` 加载同结构的 Outer `.proto`，再 `registerOuterProtobufMessages`

命令行示例：

```bash
dotnet run --project Fantasy.Packages/Fantasy.ProtocolExportTool -- export -S --config path/to/ExporterSettings.json
# 或交互：加 -ts ../Fantasy.Cocos/src/proto
```

## 推荐接入（Cocos Creator 扩展 / asset-db）

在 Creator 工程的 `extensions/fantasy-cocos` 中挂载本包脚本，再通过 `db://` 引用：

```ts
import { netChannel, NetConfig } from 'db://fantasy-cocos/index';
import { ProtoOuterDispatcher } from 'db://fantasy-cocos/protobuf/index';
```

示例：`examples/Client/Cocos`（`npm run link:fantasy-cocos` 将本包 `src` 镜像到扩展 `assets`）。  
**注意：** Creator 无法通过 junction/symlink 解析扩展脚本，必须使用真实文件；勿把运行时拷进项目 `assets/scripts`。

## Node / 非 Creator 接入（npm dist）

```ts
import protobuf from 'protobufjs';
import { netChannel, NetConfig } from 'fantasy-cocos';
import { ProtoOuterDispatcher } from 'fantasy-cocos/protobuf';
import { OuterOpcode } from './proto/OuterOpcode';
import { registerOuterProtobufMessages } from './proto/ProtoOuterDispatcherInit';

const root = await protobuf.load('resources/proto/OuterMessage.proto');
const dispatcher = new ProtoOuterDispatcher(root);
registerOuterProtobufMessages(dispatcher);

NetConfig.gameIp = '127.0.0.1';
NetConfig.gamePort = '20000';
NetConfig.gamePath = '/';

netChannel.gameCreate();
netChannel.game.setProtoDispatcher(dispatcher);
netChannel.gameConnect();
```

## 底层 Session 接入

见 `examples/minimal-ws-demo/`（`FantasyRuntime` + `WebSocketSession`）。

## 开发

```bash
npm install
npm run build
```

> Creator 工程请用扩展挂载 `src`（见上），不要依赖 `node_modules/fantasy-cocos` 的 dist，否则易出现 `Unexpected export statement in CJS module`。

> 当前默认实现 WebSocket。TCP/KCP 可在此基础上扩展 native 通道。
