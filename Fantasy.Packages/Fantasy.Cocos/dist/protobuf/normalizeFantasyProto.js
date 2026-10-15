"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeFantasyProtoSource = normalizeFantasyProtoSource;
/**
 * 将 Fantasy 协议方言转为标准 proto3，供 protobufjs 解析。
 *
 * Fantasy 扩展关键字（仅影响 C# 生成端行为，wire 语义对齐标准 protobuf）：
 * - `repeatedList` / `repeatedArray` → `repeated`
 * - `repeatedList byte` / `repeatedArray byte` → `bytes`（对应 List&lt;byte&gt; / byte[]）
 * - enum 成员尾部 `,` → `;`（Fantasy 示例常用逗号，标准 proto3 为分号）
 */
function normalizeFantasyProtoSource(source) {
    return source
        .replace(/\brepeated(?:List|Array)\s+byte\b/g, 'bytes')
        .replace(/\brepeated(?:List|Array)\s+(\w+)/g, 'repeated $1')
        // enum: `Name = 1,` → `Name = 1;`；末项无逗号时补 `;`
        .replace(/(\w+\s*=\s*-?\d+)\s*,/g, '$1;')
        .replace(/(\w+\s*=\s*-?\d+)\s*(?=\r?\n\s*})/g, '$1;');
}
//# sourceMappingURL=normalizeFantasyProto.js.map