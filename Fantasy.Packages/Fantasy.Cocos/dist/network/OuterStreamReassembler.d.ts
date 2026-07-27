export interface OuterPacket {
    protocolCode: number;
    rpcId: number;
    address: bigint;
    body: Uint8Array;
}
export declare class OuterStreamReassembler {
    private buf;
    append(chunk: Uint8Array): void;
    takePackets(): OuterPacket[];
    clear(): void;
}
export declare function encodeOuterFrame(params: {
    rpcId: number;
    address: bigint;
    protocolCode: number;
    body: Uint8Array;
}): Uint8Array;
//# sourceMappingURL=OuterStreamReassembler.d.ts.map