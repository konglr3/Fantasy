# Fantasy TypeScript 协议

## 两套产出

| 来源 | 命令 | 目录 | 用途 |
|------|------|------|------|
| ProtocolExportTool | `dotnet run ... -- export` | 本目录 `*.ts` | OpCode / OuterSend·Rpc·Push / DispatcherInit / Route·Roaming |
| pbjs/pbts | `npm run build:proto` | `pb/` | 静态 encode/decode + **消息/枚举类型**（`outer_pb.d.ts`） |

消息 interface / enum **不再**由 ExportTool 生成，请用 `pb/outer_pb.d.ts`（或 `import type { Fantasy } from './pb/outer_pb'`）。

## ProtocolExportTool 配置

`examples/Tools/ProtocolExportTool/ExporterSettings.json`：

```json
"NetworkProtocolTypeScriptClientDirectory": {
  "Value": "../../Client/Cocos/assets/scripts/proto"
}
```

```bash
dotnet run --project Fantasy.Packages/Fantasy.ProtocolExportTool -- export -S --config examples/Tools/ProtocolExportTool/ExporterSettings.json
```

导出文件（请勿手改）：

| 文件 | 说明 |
|------|------|
| `OuterOpcode.ts` | OpCode（Fantasy 数字，不在 .proto 内） |
| `OuterProtocol.ts` | `OuterSend` / `OuterRpc` / `OuterPush` 绑定 |
| `ProtoOuterDispatcherInit.ts` | opcode → 类型名注册 |
| `RouteType.ts` / `RoamingType.ts` | 路由 / 漫游常量 |

## 静态模块（build:proto）

协议源：`examples/Config/NetworkProtocol/Outer/*.proto`

```bash
cd examples/Client/Cocos
npm run build:proto
```

| 文件 | 说明 |
|------|------|
| `pb/outer_pb.js` | 静态编解码 |
| `pb/outer_pb.d.ts` | 消息 / 枚举类型；`*Response` 已注入 `errorCode` |
| `pb/index.ts` | `getOuterProtoRoot()` |

```ts
import { ProtoOuterDispatcher } from 'db://fantasy-cocos/protobuf/index';
import { registerOuterProtobufMessages } from './ProtoOuterDispatcherInit';
import { getOuterProtoRoot } from './pb';
import type { Fantasy } from './pb/outer_pb';

const dispatcher = new ProtoOuterDispatcher(getOuterProtoRoot());
registerOuterProtobufMessages(dispatcher);

type G2C_TestResponse = Fantasy.Network.Message.IG2C_TestResponse & { errorCode?: number };
```
