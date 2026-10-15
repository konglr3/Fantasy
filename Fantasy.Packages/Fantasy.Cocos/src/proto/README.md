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
| `OuterProtocol.ts` | `OuterSend` / `OuterRpc` / `OuterPush` 绑定表 |
| `RouteType.ts` / `RoamingType.ts` | 路由 / 漫游常量 |
| `ProtoOuterDispatcherInit.ts` | 注册到 `ProtoOuterDispatcher` |

**不再生成** `OuterMessage.ts` / `OuterEnum.ts`：消息与枚举类型由 Cocos 工程 `npm run build:proto` 产出的 `outer_pb.d.ts` 提供。

## 与 net 层对接

```ts
import { netChannel, NetConfig } from 'fantasy-cocos';
import { ProtoOuterDispatcher } from 'fantasy-cocos/protobuf';
import { OuterOpcode } from './OuterOpcode';
import { OuterSend, OuterRpc } from './OuterProtocol';
import { registerOuterProtobufMessages } from './ProtoOuterDispatcherInit';
import { getOuterProtoRoot } from '../pb'; // Cocos：assets/scripts/proto/pb

const dispatcher = new ProtoOuterDispatcher(getOuterProtoRoot());
registerOuterProtobufMessages(dispatcher);

NetConfig.gameIp = '127.0.0.1';
NetConfig.gamePort = '20000';
netChannel.gameCreate();
netChannel.game.setProtoDispatcher(dispatcher);
netChannel.gameConnect();

netChannel.game.send(OuterSend.C2G_TestMessage, { Tag: 'hello' });

const ret = await netChannel.game.call(
  OuterRpc.C2G_LoginGameRequest,
  { AccountName: 'demo' }
);
```
