import type { Message, Root } from 'protobufjs';
import type { WebSocketSession } from '../network/WebSocketSession';
import type { OuterPacket } from '../network/OuterStreamReassembler';
export interface DecodedOuterMessage {
    protocolCode: number;
    rpcId: number;
    address: bigint;
    message: Message;
    typeName: string;
}
export interface DecodeErrorEvent {
    packet: OuterPacket;
    error: unknown;
}
export declare class ProtoOuterDispatcher {
    private readonly root;
    private readonly types;
    onDecoded: ((evt: DecodedOuterMessage) => void) | null;
    onUnknownOpcode: ((packet: OuterPacket) => void) | null;
    onDecodeError: ((evt: DecodeErrorEvent) => void) | null;
    constructor(root: Root);
    register(opcode: number, fullTypeName: string): this;
    encodeBody(fullTypeName: string, plain: Record<string, unknown>): Uint8Array;
    encodeMessage(message: Message): Uint8Array;
    dispatch(packet: OuterPacket): void;
}
export declare function attachProtoOuterDispatcher(session: WebSocketSession, dispatcher: ProtoOuterDispatcher): () => void;
//# sourceMappingURL=ProtoOuterDispatcher.d.ts.map