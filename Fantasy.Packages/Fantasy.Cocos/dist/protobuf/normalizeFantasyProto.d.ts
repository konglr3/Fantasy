/**
 * 将 Fantasy 协议方言转为标准 proto3，供 protobufjs 解析。
 *
 * Fantasy 扩展关键字（仅影响 C# 生成端行为，wire 语义对齐标准 protobuf）：
 * - `repeatedList` / `repeatedArray` → `repeated`
 * - `repeatedList byte` / `repeatedArray byte` → `bytes`（对应 List&lt;byte&gt; / byte[]）
 * - enum 成员尾部 `,` → `;`（Fantasy 示例常用逗号，标准 proto3 为分号）
 */
export declare function normalizeFantasyProtoSource(source: string): string;
//# sourceMappingURL=normalizeFantasyProto.d.ts.map