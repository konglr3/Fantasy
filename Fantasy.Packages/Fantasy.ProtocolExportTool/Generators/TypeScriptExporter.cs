using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Fantasy.Network;
using Fantasy.ProtocolExportTool.Abstract;
using Fantasy.ProtocolExportTool.Models;
using Fantasy.ProtocolExportTool.Services;

namespace Fantasy.ProtocolExportTool.Generators;

public sealed class TypeScriptExporter(
    string protocolDirectory,
    string typeScriptClientDirectory,
    OpCodeCacheSession opCodeCache)
    : AProtocolExporter(protocolDirectory, typeScriptClientDirectory, string.Empty, opCodeCache, ProtocolExportType.Client)
{
    private const string FileHeader =
        "/* eslint-disable */\n// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。\n\n";

    protected override string GeneratedFileExtension => "ts";

    protected override string OuterMessageHelperFileName => $"OuterProtocol.{GeneratedFileExtension}";

    protected override string GenerateRouteTypes(IReadOnlyDictionary<string, int> routeTypes)
    {
        if (routeTypes.Count == 0)
        {
            return string.Empty;
        }

        var ordered = routeTypes.OrderBy(d => d.Value).ToList();
        var entries = string.Join(",\n", ordered.Select(x =>
        {
            var comment = x.Key.EndsWith("Route", StringComparison.Ordinal)
                ? x.Key[..^"Route".Length]
                : x.Key;
            return $"  /** {EscapeComment(comment)} */\n  {x.Key}: {x.Value}";
        }));
        var values = string.Join(", ", ordered.Select(x => x.Value.ToString()));

        return $$"""
            {{FileHeader}}/** Route 协议常量（须 ≥1000，1000 以内为框架预留） */
            export const RouteType = {
            {{entries}}
            } as const;

            export type RouteTypeKey = keyof typeof RouteType;

            /** 所有 Route 取值，便于遍历 */
            export const RouteTypeValues: readonly number[] = [{{values}}] as const;
            """;
    }

    protected override string GenerateRoamingTypes(IReadOnlyDictionary<string, int> roamingTypes)
    {
        if (roamingTypes.Count == 0)
        {
            return string.Empty;
        }

        var ordered = roamingTypes.OrderBy(d => d.Value).ToList();
        var entries = string.Join(",\n", ordered.Select(x =>
        {
            var comment = x.Key.EndsWith("RoamingType", StringComparison.Ordinal)
                ? x.Key[..^"RoamingType".Length]
                : x.Key.EndsWith("Type", StringComparison.Ordinal)
                    ? x.Key[..^"Type".Length]
                    : x.Key;
            return $"  /** {EscapeComment(comment)} */\n  {x.Key}: {x.Value}";
        }));
        var values = string.Join(", ", ordered.Select(x => x.Value.ToString()));

        return $$"""
            {{FileHeader}}/** Roaming 协议常量（须 ≥10000，10000 以内为框架预留） */
            export const RoamingType = {
            {{entries}}
            } as const;

            export type RoamingTypeKey = keyof typeof RoamingType;

            export const RoamingTypeValues: readonly number[] = [{{values}}] as const;
            """;
    }

    protected override string GenerateOuterOpcode(IReadOnlyList<OpcodeInfo> opcodeInfos)
    {
        if (opcodeInfos.Count == 0)
        {
            return string.Empty;
        }

        var lines = string.Join(",\n", opcodeInfos.Select(x => $"  {x.Name}: {x.Code}"));
        return $$"""
            {{FileHeader}}/** 外网消息 OpCode */
            export const OuterOpcode = {
            {{lines}}
            } as const;

            export type OuterOpcodeName = keyof typeof OuterOpcode;
            """;
    }

    protected override string GenerateInnerOpcode(IReadOnlyList<OpcodeInfo> opcodeInfos) => string.Empty;

    protected override string GenerateOuterMessages(
        IReadOnlySet<string> outerNamespaces,
        IReadOnlyDictionary<string, MessageDefinition> messageDefinitions)
    {
        if (messageDefinitions.Count == 0)
        {
            return string.Empty;
        }

        var sb = new StringBuilder();
        sb.Append(FileHeader);

        if (outerNamespaces.Count > 0)
        {
            sb.AppendLine("/** 协议中声明的 C# using（TypeScript 侧仅作文档） */");
            foreach (var ns in outerNamespaces.OrderBy(x => x, StringComparer.Ordinal))
            {
                sb.AppendLine($"// using {EscapeComment(ns)}");
            }

            sb.AppendLine();
        }

        sb.AppendLine("/** 外网消息结构（与 C# OuterMessage 字段语义对齐） */");

        foreach (var (messageName, message) in messageDefinitions)
        {
            foreach (var line in message.DefineConstants)
            {
                sb.AppendLine($"// {EscapeComment(line)}");
            }

            WriteMessageComment(sb, message);
            sb.AppendLine($"export interface {messageName} {{");

            if (message.HasOpCode)
            {
                sb.AppendLine($"  /** OpCode 常量见 \"./OuterOpcode.ts\" 中的 OuterOpcode.{messageName} */");
            }

            if (IsRequestType(message.MessageType) && !string.IsNullOrEmpty(message.ResponseType))
            {
                sb.AppendLine($"  /** 对应响应消息类型（仅类型提示，不参与序列化） */\n  __responseType?: '{message.ResponseType}';");
            }

            if (IsResponseType(message.MessageType))
            {
                sb.AppendLine("  /** 框架响应错误码 */\n  errorCode?: number;");
            }

            if (HasRouteType(message.MessageType) && !string.IsNullOrEmpty(message.CustomRouteType))
            {
                sb.AppendLine($"  /** 路由类型常量: {EscapeComment(message.CustomRouteType)} */\n  routeType?: number;");
            }

            foreach (var field in message.Fields)
            {
                if (field.CustomTextLine != null)
                {
                    sb.AppendLine($"  // {EscapeComment(field.CustomTextLine)}");
                    continue;
                }

                if (field.DocumentationComments.Count > 0)
                {
                    sb.AppendLine("  /**");
                    foreach (var c in field.DocumentationComments)
                    {
                        sb.AppendLine($"   * {EscapeComment(c)}");
                    }

                    sb.AppendLine("   */");
                }

                var optional = IsOptionalField(field, messageDefinitions) ? "?" : string.Empty;
                sb.AppendLine($"  {ToSafePropertyName(field.Name)}{optional}: {ConvertTsType(field, messageDefinitions)};");
            }

            sb.AppendLine("}");
            sb.AppendLine();
        }

        return sb.ToString().TrimEnd() + Environment.NewLine;
    }

    protected override string GenerateInnerMessages(
        IReadOnlySet<string> innerNamespaces,
        IReadOnlyDictionary<string, MessageDefinition> messageDefinitions) => string.Empty;

    protected override string GenerateOuterMessageHelper(IReadOnlyDictionary<string, MessageDefinition> messageDefinitions)
    {
        if (messageDefinitions.Count == 0)
        {
            return string.Empty;
        }

        var sendEntries = new List<string>();
        var rpcEntries = new List<string>();
        var pushEntries = new List<string>();

        foreach (var (name, message) in messageDefinitions.OrderBy(x => x.Key, StringComparer.Ordinal))
        {
            if (!message.HasOpCode)
            {
                continue;
            }

            switch (message.MessageType)
            {
                case MessageType.Message:
                case MessageType.RouteTypeMessage:
                case MessageType.RoamingMessage:
                    sendEntries.Add(
                        $"  {name}: {{ opcode: OuterOpcode.{name}, reqName: '{EscapeTsSingleQuoted(name)}' }}");
                    break;
                case MessageType.Request:
                case MessageType.RouteTypeRequest:
                case MessageType.RoamingRequest:
                    if (string.IsNullOrEmpty(message.ResponseType))
                    {
                        break;
                    }

                    rpcEntries.Add(
                        $"  {name}: {{ opcode: OuterOpcode.{name}, reqName: '{EscapeTsSingleQuoted(name)}', respName: '{EscapeTsSingleQuoted(message.ResponseType)}' }}");
                    break;
                case MessageType.Response:
                case MessageType.RouteTypeResponse:
                case MessageType.RoamingResponse:
                    // 服务端推送 / 响应也可按类型名监听
                    pushEntries.Add(
                        $"  {name}: {{ opcode: OuterOpcode.{name}, typeName: '{EscapeTsSingleQuoted(name)}' }}");
                    break;
            }
        }

        if (sendEntries.Count == 0 && rpcEntries.Count == 0 && pushEntries.Count == 0)
        {
            return string.Empty;
        }

        var sb = new StringBuilder();
        sb.Append(FileHeader);
        sb.AppendLine("import { OuterOpcode } from './OuterOpcode';");
        sb.AppendLine();
        sb.AppendLine("/** 单向消息绑定（IMessage / Route / Roaming Message） */");
        sb.AppendLine("export type OuterSendDef = { readonly opcode: number; readonly reqName: string };");
        sb.AppendLine();
        sb.AppendLine("/** RPC 绑定（IRequest ↔ ResponseType） */");
        sb.AppendLine(
            "export type OuterRpcDef = { readonly opcode: number; readonly reqName: string; readonly respName: string };");
        sb.AppendLine();
        sb.AppendLine("/** 推送 / 响应消息绑定（按 opcode 监听） */");
        sb.AppendLine("export type OuterPushDef = { readonly opcode: number; readonly typeName: string };");
        sb.AppendLine();

        sb.AppendLine("/** send(def, params) 使用 */");
        sb.AppendLine("export const OuterSend = {");
        sb.AppendLine(sendEntries.Count > 0 ? string.Join(",\n", sendEntries) : string.Empty);
        sb.AppendLine("} as const;");
        sb.AppendLine();
        sb.AppendLine("export type OuterSendKey = keyof typeof OuterSend;");
        sb.AppendLine();

        sb.AppendLine("/** callRpc(def, params) 使用：opcode / reqName / respName 已绑定 */");
        sb.AppendLine("export const OuterRpc = {");
        sb.AppendLine(rpcEntries.Count > 0 ? string.Join(",\n", rpcEntries) : string.Empty);
        sb.AppendLine("} as const;");
        sb.AppendLine();
        sb.AppendLine("export type OuterRpcKey = keyof typeof OuterRpc;");
        sb.AppendLine();

        sb.AppendLine("/** on(def, callback) 使用 */");
        sb.AppendLine("export const OuterPush = {");
        sb.AppendLine(pushEntries.Count > 0 ? string.Join(",\n", pushEntries) : string.Empty);
        sb.AppendLine("} as const;");
        sb.AppendLine();
        sb.AppendLine("export type OuterPushKey = keyof typeof OuterPush;");
        sb.AppendLine();

        return sb.ToString();
    }

    protected override string GenerateOuterEnums(IReadOnlyList<EnumDefinition> enumDefinitions)
    {
        return enumDefinitions.Count == 0 ? string.Empty : FileHeader + GenerateEnumsTs(enumDefinitions);
    }

    protected override string GenerateInnerEnums(IReadOnlyList<EnumDefinition> enumDefinitions) => string.Empty;

    public async Task WriteProtoOuterDispatcherInitAsync()
    {
        var template = BuildProtoOuterDispatcherInitScript(OuterMessages);
        if (string.IsNullOrWhiteSpace(template))
        {
            return;
        }

        if (!Directory.Exists(ClientDirectory))
        {
            Directory.CreateDirectory(ClientDirectory);
        }

        var path = Path.Combine(ClientDirectory, $"ProtoOuterDispatcherInit.{GeneratedFileExtension}");
        await File.WriteAllTextAsync(path, template);
    }

    private static string BuildProtoOuterDispatcherInitScript(IReadOnlyDictionary<string, MessageDefinition> outerMessages)
    {
        var lines = outerMessages
            .Select(static kv => kv.Value)
            .Where(static d => d is { HasOpCode: true, OpCode: not null })
            .Where(static d => d.Protocol.OpCodeType == OpCodeProtocolType.ProtoBuf)
            .OrderBy(static d => d.OpCode!.Code)
            .Select(static d => $"  dispatcher.register(OuterOpcode.{d.OpCode!.Name}, '{EscapeTsSingleQuoted(d.Name)}');")
            .ToList();

        if (lines.Count == 0)
        {
            return string.Empty;
        }

        var body = string.Join("\n", lines);
        // 使用结构化类型，避免 src/dist 两套 ProtoOuterDispatcher（含 private 字段）名义类型冲突
        return $$"""
            {{FileHeader}}import { OuterOpcode } from './OuterOpcode';

            /** 仅依赖 register 能力，兼容 fantasy-cocos 的 src / dist / 已发布类型 */
            export type OuterProtobufRegistrar = {
              register(opcode: number, fullTypeName: string): unknown;
            };

            export function registerOuterProtobufMessages(dispatcher: OuterProtobufRegistrar): void {
            {{body}}
            }

            """;
    }

    private static string GenerateEnumsTs(IReadOnlyList<EnumDefinition> enumDefinitions)
    {
        var sb = new StringBuilder();

        foreach (var enumDefinition in enumDefinitions)
        {
            if (enumDefinition.DocumentationComments.Count > 0)
            {
                sb.AppendLine("/**");
                foreach (var c in enumDefinition.DocumentationComments)
                {
                    sb.AppendLine($" * {EscapeComment(c)}");
                }

                sb.AppendLine(" */");
            }

            sb.AppendLine($"export enum {enumDefinition.Name} {{");

            for (var i = 0; i < enumDefinition.Values.Count; i++)
            {
                var value = enumDefinition.Values[i];
                if (value.DocumentationComments.Count > 0)
                {
                    sb.AppendLine("  /**");
                    foreach (var c in value.DocumentationComments)
                    {
                        sb.AppendLine($"   * {EscapeComment(c)}");
                    }

                    sb.AppendLine("   */");
                }

                var comma = i < enumDefinition.Values.Count - 1 ? "," : string.Empty;
                sb.AppendLine($"  {value.Name} = {value.Value}{comma}");
            }

            sb.AppendLine("}");
            sb.AppendLine();
        }

        return sb.ToString().TrimEnd() + Environment.NewLine;
    }

    private static void WriteMessageComment(StringBuilder sb, MessageDefinition message)
    {
        var hasDoc = message.DocumentationComments.Count > 0;
        var hasMeta = !string.IsNullOrEmpty(message.InterfaceType) ||
                      (IsRequestType(message.MessageType) && !string.IsNullOrEmpty(message.ResponseType)) ||
                      (HasRouteType(message.MessageType) && !string.IsNullOrEmpty(message.CustomRouteType));

        if (!hasDoc && !hasMeta)
        {
            return;
        }

        sb.AppendLine("/**");
        foreach (var c in message.DocumentationComments)
        {
            sb.AppendLine($" * {EscapeComment(c)}");
        }

        if (!string.IsNullOrEmpty(message.InterfaceType))
        {
            sb.AppendLine($" * @Fantasy.interface {EscapeComment(message.InterfaceType)}");
        }

        if (IsRequestType(message.MessageType) && !string.IsNullOrEmpty(message.ResponseType))
        {
            sb.AppendLine($" * @response {EscapeComment(message.ResponseType)}");
        }

        if (HasRouteType(message.MessageType) && !string.IsNullOrEmpty(message.CustomRouteType))
        {
            sb.AppendLine($" * @route {EscapeComment(message.CustomRouteType)}");
        }

        sb.AppendLine(" */");
    }

    private static bool IsOptionalField(FieldDefinition field, IReadOnlyDictionary<string, MessageDefinition> messageDefinitions)
    {
        if (field.CollectionType is FieldCollectionType.Normal or FieldCollectionType.None)
        {
            if (messageDefinitions.ContainsKey(field.Type))
            {
                return true;
            }

            return field.Type is "string" or "bytes";
        }

        return false;
    }

    private static string ConvertTsType(FieldDefinition field, IReadOnlyDictionary<string, MessageDefinition> messageDefinitions)
    {
        return field.CollectionType switch
        {
            FieldCollectionType.Normal or FieldCollectionType.None => ConvertTsBaseType(field.Type, messageDefinitions),
            FieldCollectionType.Repeated or FieldCollectionType.RepeatedList =>
                $"readonly {ConvertTsBaseType(field.Type, messageDefinitions)}[]",
            FieldCollectionType.RepeatedArray => $"{ConvertTsBaseType(field.Type, messageDefinitions)}[]",
            FieldCollectionType.Map =>
                $"Readonly<Record<{ConvertTsBaseType(field.MapKeyType, messageDefinitions)}, {ConvertTsBaseType(field.MapValueType, messageDefinitions)}>>",
            _ => throw new NotSupportedException(
                $"Unsupported collection type '{field.CollectionType}' at line {field.SourceLineNumber}")
        };
    }

    private static string ConvertTsBaseType(string type, IReadOnlyDictionary<string, MessageDefinition> messageDefinitions)
    {
        switch (type)
        {
            case "int32":
            case "uint32":
            case "int":
            case "uint":
            case "float":
            case "double":
            case "byte":
                return "number";
            case "int64":
            case "uint64":
            case "long":
            case "ulong":
                return "bigint";
            case "bool":
                return "boolean";
            case "string":
                return "string";
            case "bytes":
                return "Uint8Array";
            default:
                return messageDefinitions.ContainsKey(type) ? type : type;
        }
    }

    private static string ToSafePropertyName(string name)
    {
        return name.EndsWith('?') ? name[..^1] : name;
    }

    private static string EscapeComment(string? text)
    {
        if (string.IsNullOrEmpty(text))
        {
            return string.Empty;
        }

        return text.Replace("*/", "* /", StringComparison.Ordinal);
    }

    private static string EscapeTsSingleQuoted(string value)
    {
        return value.Replace("\\", "\\\\", StringComparison.Ordinal).Replace("'", "\\'", StringComparison.Ordinal);
    }

    private static bool IsRequestType(MessageType type) =>
        type is MessageType.Request or MessageType.RouteTypeRequest or MessageType.RoamingRequest;

    private static bool IsResponseType(MessageType type) =>
        type is MessageType.Response or MessageType.RouteTypeResponse or MessageType.RoamingResponse;

    private static bool HasRouteType(MessageType type) =>
        type is MessageType.RouteTypeMessage or MessageType.RoamingMessage
            or MessageType.RoamingRequest or MessageType.RouteTypeRequest;
}
