# Fantasy TypeScript 协议（自动生成）

由 `Fantasy.ProtocolExportTool` 导出，**请勿手改**。

## 导出配置

`examples/Tools/ProtocolExportTool/ExporterSettings.json`：

```json
"NetworkProtocolTypeScriptClientDirectory": {
  "Value": "../../Client/Cocos/assets/scripts/proto"
}
```

或工作区 `examples/Config/NetworkProtocol/ExporterSettings.json` 中同样字段。

静默导出示例：

```bash
dotnet run --project Fantasy.Packages/Fantasy.ProtocolExportTool -- export -S --config examples/Tools/ProtocolExportTool/ExporterSettings.json
```

## 文件

| 文件 | 说明 |
|------|------|
| `OuterOpcode.ts` | OpCode |
| `OuterMessage.ts` | 消息 interface |
| `OuterProtocol.ts` | `OuterSend` / `OuterRpc` / `OuterPush` 绑定 |
| `ProtoOuterDispatcherInit.ts` | protobufjs 注册 |
| `OuterEnum.ts` / `RouteType.ts` / `RoamingType.ts` | 枚举与路由常量 |
