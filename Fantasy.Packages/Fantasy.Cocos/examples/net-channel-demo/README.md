# NetChannel Demo

基于 `src/net`（`netChannel` / `NetNodeGame`）的 Fantasy Outer 收发示例，含：

- **send**：单向消息（不期待 Response）
- **callRpc**：Request / Response RPC

## 前置

1. 用 `Fantasy.ProtocolExportTool` 把 TypeScript 协议导出到 `src/proto`
2. 准备与服务器一致的 Outer `.proto`（供 `protobufjs` 加载）
3. Gate WebSocket 已监听（默认 `127.0.0.1:20000`）

## 用法

```ts
import { runNetChannelDemo, demoSendMessage, demoCallRpcTestRequest } from './main';

const stop = await runNetChannelDemo({
  protoRootOrPath: 'db://assets/resources/proto/OuterMessage.proto',
  remoteHost: '127.0.0.1',
  remotePort: '20000',
  autoSendTest: true, // 连接后自动跑 send + callRpc
});

// 或连接后手动调用：
// demoSendMessage();
// await demoCallRpcTestRequest();

// stop();
```

## API 对照

| Demo | NetNodeGame | Fantasy.Net Session |
|------|-------------|---------------------|
| `send` | `send` / `notify` | `Session.Send` |
| `callRpc` | `callRpc` / `req` | `Session.Call` |

### send

```ts
netChannel.game.send(OuterOpcode.C2G_TestMessage, 'C2G_TestMessage', {
  Tag: 'hello',
});
```

### callRpc

```ts
const ret = await netChannel.game.callRpc(
  OuterOpcode.C2G_TestRequest,
  'C2G_TestRequest',
  'G2C_TestResponse',
  { Tag: 'rpc', Data: [1, 2, 3] }
);
if (ret.isSucc) {
  console.log(ret.res);
} else {
  console.warn(ret.err); // Response.errorCode
}
```
