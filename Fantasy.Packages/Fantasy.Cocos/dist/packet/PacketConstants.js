"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketConstants = void 0;
/**
 * 与 Fantasy.PacketParser.Packet（Fantasy.Unity / Fantasy.Net）一致的外网包头布局。
 */
exports.PacketConstants = {
    PacketLength: 4,
    ProtocolCodeLength: 4,
    RpcIdLength: 4,
    PacketAddressLength: 8,
    get OuterPacketRpcIdLocation() {
        return this.PacketLength + this.ProtocolCodeLength;
    },
    get OuterPacketHeadLength() {
        return this.PacketLength + this.ProtocolCodeLength + this.RpcIdLength + this.PacketAddressLength;
    }
};
//# sourceMappingURL=PacketConstants.js.map