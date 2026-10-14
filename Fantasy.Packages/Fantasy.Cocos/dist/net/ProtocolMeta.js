export function isOuterRpcDef(value) {
    return (typeof value === 'object' &&
        value !== null &&
        typeof value.opcode === 'number' &&
        typeof value.reqName === 'string' &&
        typeof value.respName === 'string');
}
export function isOuterSendDef(value) {
    return (typeof value === 'object' &&
        value !== null &&
        typeof value.opcode === 'number' &&
        typeof value.reqName === 'string' &&
        !('respName' in value));
}
export function isOuterPushDef(value) {
    return (typeof value === 'object' &&
        value !== null &&
        typeof value.opcode === 'number' &&
        typeof value.typeName === 'string');
}
//# sourceMappingURL=ProtocolMeta.js.map