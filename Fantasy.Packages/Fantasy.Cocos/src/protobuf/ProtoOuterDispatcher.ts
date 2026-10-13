import type { Message, Root, Type } from 'protobufjs';
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

export class ProtoOuterDispatcher {
  private readonly types = new Map<number, Type>();
  onDecoded: ((evt: DecodedOuterMessage) => void) | null = null;
  onUnknownOpcode: ((packet: OuterPacket) => void) | null = null;
  onDecodeError: ((evt: DecodeErrorEvent) => void) | null = null;

  constructor(private readonly root: Root) {}

  register(opcode: number, fullTypeName: string): this {
    const t = this.root.lookupType(fullTypeName);
    if (!t) {
      throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
    }
    this.types.set(opcode >>> 0, t);
    return this;
  }

  encodeBody(fullTypeName: string, plain: Record<string, unknown>): Uint8Array {
    const t = this.root.lookupType(fullTypeName);
    if (!t) {
      throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
    }
    const err = t.verify(plain);
    if (err) {
      throw new Error(`[ProtoOuterDispatcher] verify failed: ${err}`);
    }
    const msg = t.create(plain);
    return t.encode(msg).finish();
  }

  /** 按类型名解码 body（RPC 响应 / 推送） */
  decodeBody(fullTypeName: string, body: Uint8Array): Message {
    const t = this.root.lookupType(fullTypeName);
    if (!t) {
      throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
    }
    return t.decode(body);
  }

  /** 按已注册 opcode 解码；未注册返回 null */
  decodeByOpcode(protocolCode: number, body: Uint8Array): { typeName: string; message: Message } | null {
    const t = this.types.get(protocolCode >>> 0);
    if (!t) {
      return null;
    }
    return { typeName: t.fullName, message: t.decode(body) };
  }

  encodeMessage(message: Message): Uint8Array {
    const t = message.$type;
    if (!t) {
      throw new Error('[ProtoOuterDispatcher] message.$type is missing; use message created by protobufjs Root');
    }
    return t.encode(message).finish();
  }

  dispatch(packet: OuterPacket): void {
    const t = this.types.get(packet.protocolCode >>> 0);
    if (!t) {
      this.onUnknownOpcode?.(packet);
      return;
    }

    try {
      const message = t.decode(packet.body);
      this.onDecoded?.({
        protocolCode: packet.protocolCode,
        rpcId: packet.rpcId,
        address: packet.address,
        message,
        typeName: t.fullName
      });
    } catch (error) {
      this.onDecodeError?.({ packet, error });
    }
  }
}

export function attachProtoOuterDispatcher(
  session: WebSocketSession,
  dispatcher: ProtoOuterDispatcher
): () => void {
  const prev = session.onOuterPacket;
  session.onOuterPacket = (packet) => {
    dispatcher.dispatch(packet);
    if (prev) {
      prev(packet);
    }
  };

  return () => {
    session.onOuterPacket = prev;
  };
}
