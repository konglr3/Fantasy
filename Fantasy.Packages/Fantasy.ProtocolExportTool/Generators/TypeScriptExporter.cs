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

    /// <summary>
    /// 消息结构类型由 pbjs/pbts（outer_pb.d.ts）提供，不再生成 OuterMessage.ts。
    /// </summary>
    protected override string GenerateOuterMessages(
        IReadOnlySet<string> outerNamespaces,
        IReadOnlyDictionary<string, MessageDefinition> messageDefinitions) => string.Empty;

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
        // 导出具名 type alias（G2C_ConnectRoamingResponse），便于 call 返回类型阅读/提示
        var aliasNames = new SortedSet<string>(StringComparer.Ordinal);

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
                    if (IsServerToClientMessageName(name))
                    {
                        aliasNames.Add(name);
                        pushEntries.Add(
                            $"  {name}: pushDef<{name}>(OuterOpcode.{name}, '{EscapeTsSingleQuoted(name)}')");
                    }
                    else
                    {
                        aliasNames.Add(name);
                        sendEntries.Add(
                            $"  {name}: sendDef<{name}>(OuterOpcode.{name}, '{EscapeTsSingleQuoted(name)}')");
                    }

                    break;
                case MessageType.Request:
                case MessageType.RouteTypeRequest:
                case MessageType.RoamingRequest:
                    if (string.IsNullOrEmpty(message.ResponseType))
                    {
                        break;
                    }

                    aliasNames.Add(name);
                    aliasNames.Add(message.ResponseType);
                    rpcEntries.Add(
                        $"  {name}: rpcDef<{message.ResponseType}, {name}>(OuterOpcode.{name}, '{EscapeTsSingleQuoted(name)}', '{EscapeTsSingleQuoted(message.ResponseType)}')");
                    break;
                case MessageType.Response:
                case MessageType.RouteTypeResponse:
                case MessageType.RoamingResponse:
                    aliasNames.Add(name);
                    pushEntries.Add(
                        $"  {name}: pushDef<{name}>(OuterOpcode.{name}, '{EscapeTsSingleQuoted(name)}')");
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
        sb.AppendLine("import type { OuterPushDef, OuterRpcDef, OuterSendDef } from 'db://fantasy-cocos/net/ProtocolMeta';");
        sb.AppendLine("import type * as OuterPb from './pb/outer_pb';");
        sb.AppendLine("import type { Fantasy } from './pb/outer_pb';");
        sb.AppendLine();
        sb.AppendLine("export type { OuterPushDef, OuterRpcDef, OuterSendDef };");
        sb.AppendLine();
        // 用 I* 接口（plain object），不要用 class（class 要求 toJSON 等，无法传字面量）
        sb.AppendLine("/** 无 package → 根 I*；有 package → Fantasy.Network.Message.I* */");
        sb.AppendLine(
            "type RootIface<N extends string> = `I${N}` extends keyof OuterPb ? OuterPb[`I${N}` & keyof OuterPb] : never;");
        sb.AppendLine(
            "type NestedIface<N extends string> = `I${N}` extends keyof Fantasy.Network.Message ? Fantasy.Network.Message[`I${N}` & keyof Fantasy.Network.Message] : never;");
        sb.AppendLine(
            "export type OuterPbMsg<N extends string> = [RootIface<N>] extends [never] ? ([NestedIface<N>] extends [never] ? Record<string, unknown> : NestedIface<N>) : RootIface<N>;");
        sb.AppendLine();
        sb.AppendLine("/** 具名消息类型 = pbjs I* 接口（可传 { Tag, Data } 字面量） */");
        foreach (var alias in aliasNames)
        {
            if (messageDefinitions.TryGetValue(alias, out var def) && IsInFantasyNetworkMessagePackage(def))
            {
                sb.AppendLine($"export type {alias} = Fantasy.Network.Message.I{alias};");
            }
            else
            {
                sb.AppendLine($"export type {alias} = OuterPbMsg<'{EscapeTsSingleQuoted(alias)}'>;");
            }
        }

        sb.AppendLine();
        sb.AppendLine("function rpcDef<TResp, TReq = Record<string, unknown>>(");
        sb.AppendLine("  opcode: number,");
        sb.AppendLine("  reqName: string,");
        sb.AppendLine("  respName: string");
        sb.AppendLine("): OuterRpcDef<TResp, TReq> {");
        sb.AppendLine("  return { opcode, reqName, respName, __resp: undefined as TResp, __req: undefined as TReq };");
        sb.AppendLine("}");
        sb.AppendLine();
        sb.AppendLine("function sendDef<TReq = Record<string, unknown>>(opcode: number, reqName: string): OuterSendDef<TReq> {");
        sb.AppendLine("  return { opcode, reqName, __req: undefined as TReq };");
        sb.AppendLine("}");
        sb.AppendLine();
        sb.AppendLine("function pushDef<TData = unknown>(opcode: number, typeName: string): OuterPushDef<TData> {");
        sb.AppendLine("  return { opcode, typeName, __data: undefined as TData };");
        sb.AppendLine("}");
        sb.AppendLine();

        sb.AppendLine("/** send(def, params) 使用 */");
        sb.AppendLine("export const OuterSend = {");
        sb.AppendLine(sendEntries.Count > 0 ? string.Join(",\n", sendEntries) : string.Empty);
        sb.AppendLine("};");
        sb.AppendLine();
        sb.AppendLine("export type OuterSendKey = keyof typeof OuterSend;");
        sb.AppendLine();

        sb.AppendLine("/** call(def, params) → WebSocketReturn<G2C_...>，无需手写泛型 */");
        sb.AppendLine("export const OuterRpc = {");
        sb.AppendLine(rpcEntries.Count > 0 ? string.Join(",\n", rpcEntries) : string.Empty);
        sb.AppendLine("};");
        sb.AppendLine();
        sb.AppendLine("export type OuterRpcKey = keyof typeof OuterRpc;");
        sb.AppendLine();

        sb.AppendLine("/** on(def, callback) 使用 */");
        sb.AppendLine("export const OuterPush = {");
        sb.AppendLine(pushEntries.Count > 0 ? string.Join(",\n", pushEntries) : string.Empty);
        sb.AppendLine("};");
        sb.AppendLine();
        sb.AppendLine("export type OuterPushKey = keyof typeof OuterPush;");
        sb.AppendLine();

        return sb.ToString();
    }

    /// <summary>
    /// 枚举类型由 pbjs/pbts（outer_pb.d.ts）提供，不再生成 OuterEnum.ts。
    /// </summary>
    protected override string GenerateOuterEnums(IReadOnlyList<EnumDefinition> enumDefinitions) => string.Empty;

    protected override string GenerateInnerEnums(IReadOnlyList<EnumDefinition> enumDefinitions) => string.Empty;

    public async Task WriteProtoOuterDispatcherInitAsync()
    {
        if (!Directory.Exists(ClientDirectory))
        {
            Directory.CreateDirectory(ClientDirectory);
        }

        // 清理历史冗余产物（类型改由 static pb 提供）
        TryDeleteGeneratedFile("OuterMessage.ts");
        TryDeleteGeneratedFile("OuterEnum.ts");

        var template = BuildProtoOuterDispatcherInitScript(OuterMessages);
        if (string.IsNullOrWhiteSpace(template))
        {
            return;
        }

        var path = Path.Combine(ClientDirectory, $"ProtoOuterDispatcherInit.{GeneratedFileExtension}");
        await File.WriteAllTextAsync(path, template);
    }

    private void TryDeleteGeneratedFile(string fileName)
    {
        var path = Path.Combine(ClientDirectory, fileName);
        if (File.Exists(path))
        {
            File.Delete(path);
        }

        var meta = path + ".meta";
        if (File.Exists(meta))
        {
            File.Delete(meta);
        }
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

    /// <summary>
    /// 约定：G2C_ / M2C_ / Chat2C_ / Map2C_ 等为服务端→客户端消息，进入 OuterPush。
    /// </summary>
    private static bool IsServerToClientMessageName(string name) =>
        name.StartsWith("G2C_", StringComparison.Ordinal)
        || name.StartsWith("M2C_", StringComparison.Ordinal)
        || name.StartsWith("Chat2C_", StringComparison.Ordinal)
        || name.StartsWith("Map2C_", StringComparison.Ordinal);

    private static readonly Dictionary<string, bool> PackageCache = new(StringComparer.OrdinalIgnoreCase);

    private static bool IsInFantasyNetworkMessagePackage(MessageDefinition message)
    {
        var path = message.SourceFilePath;
        if (string.IsNullOrWhiteSpace(path))
        {
            return false;
        }

        if (PackageCache.TryGetValue(path, out var cached))
        {
            return cached;
        }

        var hit = false;
        try
        {
            if (File.Exists(path))
            {
                var text = File.ReadAllText(path);
                hit = text.Contains("package Fantasy.Network.Message", StringComparison.Ordinal);
            }
        }
        catch
        {
            hit = false;
        }

        PackageCache[path] = hit;
        return hit;
    }
}
