# NetChannel Demo

基于 `src/net` 的 Fantasy Outer 收发示例。协议导出工具会生成 `OuterProtocol.ts`，把 **opcode / 请求名 / 响应名** 绑在一起，调用时不必再手写三元组。

## 简化后的 API

```ts
import { OuterSend, OuterRpc, OuterPush } from '../../src/proto/OuterProtocol';

// send：单向
netChannel.game.send(OuterSend.C2G_TestMessage, { Tag: 'hello' });

// callRpc：Request ↔ Response 已绑定
const ret = await netChannel.game.callRpc(OuterRpc.C2G_TestRequest, {
  Tag: 'rpc',
  Data: [1, 2, 3],
});

// on：推送
netChannel.game.on(OuterPush.G2C_PushMessage, (data) => {
  console.log(data);
});
```

旧写法仍可用（兼容）：

```ts
netChannel.game.callRpc(
  OuterOpcode.C2G_TestRequest,
  'C2G_TestRequest',
  'G2C_TestResponse',
  { Tag: 'rpc', Data: [1, 2, 3] }
);
```

## 导出产物

| 文件 | 作用 |
|------|------|
| `OuterOpcode.ts` | OpCode 常量 |
| `OuterProtocol.ts` | `OuterSend` / `OuterRpc` / `OuterPush` 绑定表 |
| `ProtoOuterDispatcherInit.ts` | protobufjs 注册 |
| `outer_pb.d.ts`（`npm run build:proto`） | 消息 / 枚举类型 |

## 前置

1. ProtocolExportTool 导出到 `src/proto`（Opcode / Protocol / DispatcherInit）
2. Cocos 工程 `npm run build:proto` 生成静态 pb
3. Gate WebSocket 监听（默认 `127.0.0.1:20000`）

## 运行入口

见 `examples/Client/Cocos` 的 `FantasyNetChannelDemo`（`getOuterProtoRoot()` + `OuterSend`/`OuterRpc`）。
