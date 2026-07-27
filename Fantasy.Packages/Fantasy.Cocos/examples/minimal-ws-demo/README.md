# Minimal WebSocket Demo

最小连接 + 收发示例，演示如何把导出的 TypeScript 协议接到 `fantasy-cocos`。

## 1. 同步协议文件

在 `Fantasy.Cocos` 目录执行：

```bash
npm run sync:protocol
```

默认从 `C:\Users\BenFei\Desktop\Output\TypeScript` 同步到：

```text
examples/protocol/
```

自定义源目录：

```bash
npm run sync:protocol -- --src "D:/path/to/TypeScript"
# 或
set FANTASY_TS_PROTOCOL_SRC=D:/path/to/TypeScript
npm run sync:protocol
```

## 2. 准备 .proto

`ProtoOuterDispatcher` 依赖 protobufjs `Root`。请保证能 `lookupType` 到
`ProtoOuterDispatcherInit.ts` 里注册的类型名（当前导出多为消息名，如 `C2G_TestMessage`）。

## 3. 在 Cocos Creator 中使用

```ts
import { runMinimalWsDemo } from 'fantasy-cocos/examples/minimal-ws-demo/main';
// 或直接复制 main.ts 到你的 assets/scripts

let stop: (() => void) | undefined;

async function start() {
  stop = await runMinimalWsDemo({
    protoRootOrPath: root, // protobuf.Root
    remoteHost: '127.0.0.1',
    remotePort: 20000,
    autoSendTest: true,
  });
}

function dispose() {
  stop?.();
}
```

`main.ts` 默认相对引用：

- `../../src` → 包运行时
- `../protocol` → 同步后的协议 TS

## 4. Demo 行为

1. `FantasyRuntime.connect`（WebSocket）
2. `registerOuterProtobufMessages(dispatcher)`
3. `attachProtoOuterDispatcher` 挂接收包解码
4. 默认发送一条 `C2G_TestMessage`
5. 控制台打印解码结果 / 未知 opcode / 解码错误
