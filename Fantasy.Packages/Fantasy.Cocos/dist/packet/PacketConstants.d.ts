/**
 * 与 Fantasy.PacketParser.Packet（Fantasy.Unity / Fantasy.Net）一致的外网包头布局。
 */
export declare const PacketConstants: {
    readonly PacketLength: 4;
    readonly ProtocolCodeLength: 4;
    readonly RpcIdLength: 4;
    readonly PacketAddressLength: 8;
    readonly OuterPacketRpcIdLocation: number;
    readonly OuterPacketHeadLength: number;
};
export type PacketConstantsType = typeof PacketConstants;
//# sourceMappingURL=PacketConstants.d.ts.map