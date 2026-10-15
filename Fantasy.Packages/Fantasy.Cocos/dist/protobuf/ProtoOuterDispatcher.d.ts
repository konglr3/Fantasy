import type { Message, Root, Type, Writer } from 'protobufjs';
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
/** pbjs static-module 消息类型（encode/decode 挂在构造函数上） */
export interface StaticProtoType {
    name?: string;
    fullName?: string;
    /** pbjs --no-create 时不存在；encode 可直接传 plain object */
    create?(properties?: Record<string, unknown>): object;
    encode(message: object, writer?: Writer): Writer;
    decode(reader: Uint8Array | object, length?: number): Message;
    verify?(message: object): string | null;
}
/** 反射 Root，或 pbjs `-r` 注册到 protobuf.roots 的静态命名空间 */
export type ProtoRootLike = Root | Record<string, unknown>;
type CodecType = Type | StaticProtoType;
/**
 * 解析消息类型：兼容 protobufjs Root.lookupType，以及 static-module 命名空间
 *（短名如 C2G_TestMessage，或路径 Fantasy.Network.Message.C2G_TestMessage）。
 */
export declare function resolveProtoType(root: ProtoRootLike, fullTypeName: string): CodecType;
/** 从 pbjs `-r` 注册名取静态 Root（需先 import/require 静态模块） */
export declare function getStaticProtoRoot(rootName: string): ProtoRootLike;
export declare class ProtoOuterDispatcher {
    private readonly root;
    private readonly types;
    private readonly typeNames;
    onDecoded: ((evt: DecodedOuterMessage) => void) | null;
    onUnknownOpcode: ((packet: OuterPacket) => void) | null;
    onDecodeError: ((evt: DecodeErrorEvent) => void) | null;
    constructor(root: ProtoRootLike);
    /** 使用静态模块 roots 名构造（默认 FantasyOuter，与 build:proto -r 一致） */
    static fromStaticRoot(rootName?: string): ProtoOuterDispatcher;
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
export {};
//# sourceMappingURL=ProtoOuterDispatcher.d.ts.map