"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOuterRpcDef = isOuterRpcDef;
exports.isOuterSendDef = isOuterSendDef;
exports.isOuterPushDef = isOuterPushDef;
function isOuterRpcDef(value) {
    return (typeof value === 'object' &&
        value !== null &&
        typeof value.opcode === 'number' &&
        typeof value.reqName === 'string' &&
        typeof value.respName === 'string');
}
function isOuterSendDef(value) {
    return (typeof value === 'object' &&
        value !== null &&
        typeof value.opcode === 'number' &&
        typeof value.reqName === 'string' &&
        !('respName' in value));
}
function isOuterPushDef(value) {
    return (typeof value === 'object' &&
        value !== null &&
        typeof value.opcode === 'number' &&
        typeof value.typeName === 'string');
}
//# sourceMappingURL=ProtocolMeta.js.map