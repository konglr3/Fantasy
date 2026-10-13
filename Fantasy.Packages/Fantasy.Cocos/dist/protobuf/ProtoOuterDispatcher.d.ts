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
    /** 按类型名解码 body（RPC 响应 / 推送） */
    decodeBody(fullTypeName: string, body: Uint8Array): Message;
    /** 按已注册 opcode 解码；未注册返回 null */
    decodeByOpcode(protocolCode: number, body: Uint8Array): {
        typeName: string;
        message: Message;
    } | null;
    encodeMessage(message: Message): Uint8Array;
    dispatch(packet: OuterPacket): void;
}
export declare function attachProtoOuterDispatcher(session: WebSocketSession, dispatcher: ProtoOuterDispatcher): () => void;
//# sourceMappingURL=ProtoOuterDispatcher.d.ts.map