export const OpCodeProtocolType = {
    ProtoBuf: 0,
    Bson: 1,
    MemoryPack: 2
};
export const OpCodeType = {
    OuterMessage: 1,
    OuterRequest: 2,
    OuterResponse: 3,
    InnerMessage: 4,
    InnerRequest: 5,
    InnerResponse: 6,
    InnerAddressMessage: 7,
    InnerAddressRequest: 8,
    InnerAddressResponse: 9,
    OuterAddressableMessage: 10,
    OuterAddressableRequest: 11,
    OuterAddressableResponse: 12,
    InnerAddressableMessage: 13,
    InnerAddressableRequest: 14,
    InnerAddressableResponse: 15,
    OuterCustomRouteMessage: 16,
    OuterCustomRouteRequest: 17,
    OuterCustomRouteResponse: 18,
    OuterRoamingMessage: 19,
    OuterRoamingRequest: 20,
    OuterRoamingResponse: 21,
    InnerRoamingMessage: 22,
    InnerRoamingRequest: 23,
    InnerRoamingResponse: 24,
    OuterPingRequest: 30,
    OuterPingResponse: 31
};
export function encodeOpCodeId(parts) {
    let result = parts.index >>> 0;
    result |= (parts.opCodeProtocolType & 0xf) << 23;
    result |= (parts.protocol & 0x1f) << 27;
    return result >>> 0;
}
export function decodeOpCodeId(opCodeId) {
    let x = opCodeId >>> 0;
    const index = x & 0x7fffff;
    x >>>= 23;
    const opCodeProtocolType = x & 0xf;
    x >>>= 4;
    const protocol = x & 0x1f;
    return { opCodeProtocolType, protocol, index };
}
export function createOpCode(opCodeProtocolType, protocol, index) {
    return encodeOpCodeId({ opCodeProtocolType, protocol, index });
}
export const OpCode = {
    PingRequest: createOpCode(OpCodeProtocolType.ProtoBuf, OpCodeType.OuterPingRequest, 1),
    PingResponse: createOpCode(OpCodeProtocolType.ProtoBuf, OpCodeType.OuterPingResponse, 1),
    Create: createOpCode
};
//# sourceMappingURL=OpCode.js.map