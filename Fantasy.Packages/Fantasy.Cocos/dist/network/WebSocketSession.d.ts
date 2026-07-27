import { OuterPacket, OuterStreamReassembler } from './OuterStreamReassembler';
export interface SendOuterParams {
    rpcId: number;
    address: bigint;
    protocolCode: number;
    body: Uint8Array;
}
export declare class WebSocketSession {
    readonly reassembler: OuterStreamReassembler;
    onOuterPacket: ((packet: OuterPacket) => void) | null;
    onClose: (() => void) | null;
    onError: ((err: Event) => void) | null;
    private ws;
    get readyState(): number;
    connect(url: string): Promise<void>;
    sendFrame(frame: Uint8Array): void;
    sendOuter(params: SendOuterParams): void;
    dispose(): void;
}
//# sourceMappingURL=WebSocketSession.d.ts.map