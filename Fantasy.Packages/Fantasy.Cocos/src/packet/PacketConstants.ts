/**
 * 与 Fantasy.PacketParser.Packet（Fantasy.Unity / Fantasy.Net）一致的外网包头布局。
 */
export const PacketConstants = {
  PacketLength: 4,
  ProtocolCodeLength: 4,
  RpcIdLength: 4,
  PacketAddressLength: 8,
  get OuterPacketRpcIdLocation(): number {
    return this.PacketLength + this.ProtocolCodeLength;
  },
  get OuterPacketHeadLength(): number {
    return this.PacketLength + this.ProtocolCodeLength + this.RpcIdLength + this.PacketAddressLength;
  }
} as const;

export type PacketConstantsType = typeof PacketConstants;
