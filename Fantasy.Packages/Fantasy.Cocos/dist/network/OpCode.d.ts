export declare const OpCodeProtocolType: {
    readonly ProtoBuf: 0;
    readonly Bson: 1;
    readonly MemoryPack: 2;
};
export declare const OpCodeType: {
    readonly OuterMessage: 1;
    readonly OuterRequest: 2;
    readonly OuterResponse: 3;
    readonly InnerMessage: 4;
    readonly InnerRequest: 5;
    readonly InnerResponse: 6;
    readonly InnerAddressMessage: 7;
    readonly InnerAddressRequest: 8;
    readonly InnerAddressResponse: 9;
    readonly OuterAddressableMessage: 10;
    readonly OuterAddressableRequest: 11;
    readonly OuterAddressableResponse: 12;
    readonly InnerAddressableMessage: 13;
    readonly InnerAddressableRequest: 14;
    readonly InnerAddressableResponse: 15;
    readonly OuterCustomRouteMessage: 16;
    readonly OuterCustomRouteRequest: 17;
    readonly OuterCustomRouteResponse: 18;
    readonly OuterRoamingMessage: 19;
    readonly OuterRoamingRequest: 20;
    readonly OuterRoamingResponse: 21;
    readonly InnerRoamingMessage: 22;
    readonly InnerRoamingRequest: 23;
    readonly InnerRoamingResponse: 24;
    readonly OuterPingRequest: 30;
    readonly OuterPingResponse: 31;
};
export interface OpCodeIdParts {
    opCodeProtocolType: number;
    protocol: number;
    index: number;
}
export declare function encodeOpCodeId(parts: OpCodeIdParts): number;
export declare function decodeOpCodeId(opCodeId: number): OpCodeIdParts;
export declare function createOpCode(opCodeProtocolType: number, protocol: number, index: number): number;
export declare const OpCode: {
    readonly PingRequest: number;
    readonly PingResponse: number;
    readonly Create: typeof createOpCode;
};
//# sourceMappingURL=OpCode.d.ts.map