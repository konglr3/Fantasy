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

## 推荐接入（net 层）

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

netChannel.game.on(OuterOpcode.G2C_PushMessage, 'G2C_PushMessage', (msg) => {
  console.log('push', msg);
});

netChannel.game.notify(OuterOpcode.C2G_TestMessage, 'C2G_TestMessage', {
  Tag: 'hello-from-cocos',
});
```

## 底层 Session 接入

见 `examples/minimal-ws-demo/`（`FantasyRuntime` + `WebSocketSession`）。

## 开发

```bash
npm install
npm run build
```

> 当前默认实现 WebSocket。TCP/KCP 可在此基础上扩展 native 通道。
