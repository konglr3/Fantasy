# 协议 TypeScript 输出目录

由 `Fantasy.ProtocolExportTool` / `Fantasy.ProtocolEditor` 导出生成，**请勿手改**。

## 配置

在 `ExporterSettings.json` 中设置：

```json
"NetworkProtocolTypeScriptClientDirectory": {
  "Value": "../Fantasy.Cocos/src/proto",
  "Comment": "TypeScript 协议输出目录"
}
```

相对路径以 `ExporterSettings.json` 所在目录为基准。默认填写本目录。

## 生成文件

| 文件 | 说明 |
|------|------|
| `OuterOpcode.ts` | 外网 OpCode 常量 |
| `OuterMessage.ts` | 消息 TypeScript interface |
| `OuterEnum.ts` | 枚举 |
| `RouteType.ts` / `RoamingType.ts` | 路由 / 漫游常量 |
| `ProtoOuterDispatcherInit.ts` | 注册到 `ProtoOuterDispatcher` |

另需与服务器一致的 Outer `.proto`，供 `protobufjs` 加载编码/解码。

## 与 net 层对接

```ts
import protobuf from 'protobufjs';
import { netChannel, NetConfig } from 'fantasy-cocos';
import { ProtoOuterDispatcher } from 'fantasy-cocos/protobuf';
import { OuterOpcode } from './OuterOpcode';
import { registerOuterProtobufMessages } from './ProtoOuterDispatcherInit';

const root = await protobuf.load('OuterMessage.proto');
const dispatcher = new ProtoOuterDispatcher(root);
registerOuterProtobufMessages(dispatcher);

NetConfig.gameIp = '127.0.0.1';
NetConfig.gamePort = '20000';
netChannel.gameCreate();
netChannel.game.setProtoDispatcher(dispatcher);
netChannel.gameConnect();

// 通知
netChannel.game.notify(OuterOpcode.C2G_TestMessage, 'C2G_TestMessage', { Tag: 'hello' });

// RPC
const ret = await netChannel.game.req(
  OuterOpcode.C2G_LoginGameRequest,
  'C2G_LoginGameRequest',
  'G2C_LoginGameResponse',
  { AccountName: 'demo' }
);
```
