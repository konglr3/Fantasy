# Fantasy.Cocos

面向 **Cocos Creator 3.x** 的 Fantasy **客户端** TypeScript 包，与 `Fantasy.Unity` / `Fantasy.Net` 的外网包格式保持一致。

## 功能

- 外网包头定义与组包解包（`PacketConstants` / `encodeOuterFrame` / `OuterStreamReassembler`）
- `WebSocketSession`（二进制帧收发）
- `FantasyRuntime`（WebSocket 一键连接入口）
- `fantasy-cocos/protobuf` 子入口，提供 `ProtoOuterDispatcher` 按 opcode 分发 protobuf 消息

## 同步导出协议（脚本）

`Fantasy.ProtocolExportTool` 导出到例如 `C:\Users\BenFei\Desktop\Output\TypeScript` 后，可一键同步到本包固定目录：

```bash
npm run sync:protocol
# 等价于
node scripts/sync-protocol.mjs
```

- 默认源目录：`C:/Users/BenFei/Desktop/Output/TypeScript`
- 固定目标：`examples/protocol/`
- 自定义源：`npm run sync:protocol -- --src "D:/path/to/TypeScript"`
- 环境变量：`FANTASY_TS_PROTOCOL_SRC`
- 先清空再拷：`npm run sync:protocol:clean`

## 最小 Demo

见 `examples/minimal-ws-demo/`：

1. `npm run sync:protocol`
2. 在 Cocos 中调用 `runMinimalWsDemo({ protoRootOrPath: root, ... })`

详情：`examples/minimal-ws-demo/README.md`

## 与协议导出文件对接

同步后可直接引用 `examples/protocol`：

```ts
import protobuf from 'protobufjs';
import { FantasyRuntime, NetworkProtocolType } from 'fantasy-cocos';
import { ProtoOuterDispatcher, attachProtoOuterDispatcher } from 'fantasy-cocos/protobuf';
import { OuterOpcode } from '../examples/protocol/OuterOpcode';
import { registerOuterProtobufMessages } from '../examples/protocol/ProtoOuterDispatcherInit';

const root = await protobuf.load('resources/proto/OuterMessage.proto');
const dispatcher = new ProtoOuterDispatcher(root);
registerOuterProtobufMessages(dispatcher);

dispatcher.onDecoded = (evt) => {
  console.log(evt.protocolCode, evt.typeName, evt.message);
};

await FantasyRuntime.connect({
  remoteHost: '127.0.0.1',
  remotePort: 20000,
  protocol: NetworkProtocolType.WebSocket,
  useTls: false
});

attachProtoOuterDispatcher(FantasyRuntime.session, dispatcher);

FantasyRuntime.session.sendOuter({
  rpcId: 0,
  address: 0n,
  protocolCode: OuterOpcode.C2G_TestMessage,
  body: dispatcher.encodeBody('C2G_TestMessage', { Tag: 'hello' })
});
```

## 开发

```bash
npm install
npm run build
npm run sync:protocol
```

> 当前默认只实现 WebSocket。TCP/KCP 可在此基础上扩展 native 通道。
