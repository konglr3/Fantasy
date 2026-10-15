import type { Message, Root, Type, Writer } from 'protobufjs';
import protobuf from 'protobufjs';
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
  create(properties?: Record<string, unknown>): object;
  encode(message: object, writer?: Writer): Writer;
  decode(reader: Uint8Array | object, length?: number): Message;
  verify?(message: object): string | null;
}

/** 反射 Root，或 pbjs `-r` 注册到 protobuf.roots 的静态命名空间 */
export type ProtoRootLike = Root | Record<string, unknown>;

type CodecType = Type | StaticProtoType;

function isReflectionRoot(root: ProtoRootLike): root is Root {
  return typeof (root as Root).lookupType === 'function';
}

function typeDisplayName(t: CodecType, fallback: string): string {
  return (t as Type).fullName || (t as StaticProtoType).name || fallback;
}

/**
 * 解析消息类型：兼容 protobufjs Root.lookupType，以及 static-module 命名空间
 *（短名如 C2G_TestMessage，或路径 Fantasy.Network.Message.C2G_TestMessage）。
 */
export function resolveProtoType(root: ProtoRootLike, fullTypeName: string): CodecType {
  const name = fullTypeName.replace(/^\./, '');

  if (isReflectionRoot(root)) {
    try {
      return root.lookupType(name);
    } catch {
      // fall through to static / short-name walk
    }
  }

  const ns = root as Record<string, unknown>;
  if (name.includes('.')) {
    let cur: unknown = ns;
    for (const part of name.split('.')) {
      if (cur == null || typeof cur !== 'object') {
        cur = undefined;
        break;
      }
      cur = (cur as Record<string, unknown>)[part];
    }
    if (cur && typeof (cur as StaticProtoType).encode === 'function') {
      return cur as StaticProtoType;
    }
  } else {
    const direct = ns[name];
    if (direct && typeof (direct as StaticProtoType).encode === 'function') {
      return direct as StaticProtoType;
    }
    const found = findStaticTypeByShortName(ns, name);
    if (found) {
      return found;
    }
  }

  throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
}

function findStaticTypeByShortName(
  ns: Record<string, unknown>,
  shortName: string,
  depth = 0
): StaticProtoType | null {
  if (depth > 8 || !ns || typeof ns !== 'object') {
    return null;
  }
  const direct = ns[shortName];
  if (direct && typeof (direct as StaticProtoType).encode === 'function') {
    return direct as StaticProtoType;
  }
  for (const key of Object.keys(ns)) {
    const child = ns[key];
    if (!child || typeof child !== 'object') {
      continue;
    }
    // 静态消息构造函数自身带 encode，跳过；命名空间无 encode
    if (typeof (child as StaticProtoType).encode === 'function') {
      continue;
    }
    const found = findStaticTypeByShortName(child as Record<string, unknown>, shortName, depth + 1);
    if (found) {
      return found;
    }
  }
  return null;
}

/** 从 pbjs `-r` 注册名取静态 Root（需先 import/require 静态模块） */
export function getStaticProtoRoot(rootName: string): ProtoRootLike {
  const fromRoots = (protobuf.roots as Record<string, ProtoRootLike | undefined>)[rootName];
  if (!fromRoots) {
    throw new Error(
      `[ProtoOuterDispatcher] protobuf.roots["${rootName}"] 不存在。请先 import 静态 pb 模块（如 outer_pb.js）。`
    );
  }
  return fromRoots;
}

export class ProtoOuterDispatcher {
  private readonly types = new Map<number, CodecType>();
  private readonly typeNames = new Map<number, string>();
  onDecoded: ((evt: DecodedOuterMessage) => void) | null = null;
  onUnknownOpcode: ((packet: OuterPacket) => void) | null = null;
  onDecodeError: ((evt: DecodeErrorEvent) => void) | null = null;

  constructor(private readonly root: ProtoRootLike) {}

  /** 使用静态模块 roots 名构造（默认 FantasyOuter，与 build:proto -r 一致） */
  static fromStaticRoot(rootName = 'FantasyOuter'): ProtoOuterDispatcher {
    return new ProtoOuterDispatcher(getStaticProtoRoot(rootName));
  }

  register(opcode: number, fullTypeName: string): this {
    const t = resolveProtoType(this.root, fullTypeName);
    const key = opcode >>> 0;
    this.types.set(key, t);
    this.typeNames.set(key, fullTypeName);
    return this;
  }

  encodeBody(fullTypeName: string, plain: Record<string, unknown>): Uint8Array {
    const t = resolveProtoType(this.root, fullTypeName);
    if (typeof t.verify === 'function') {
      const err = t.verify(plain);
      if (err) {
        throw new Error(`[ProtoOuterDispatcher] verify failed: ${err}`);
      }
    }
    const msg = t.create(plain);
    return t.encode(msg).finish();
  }

  /** 按类型名解码 body（RPC 响应 / 推送） */
  decodeBody(fullTypeName: string, body: Uint8Array): Message {
    const t = resolveProtoType(this.root, fullTypeName);
    return t.decode(body);
  }

  /** 按已注册 opcode 解码；未注册返回 null */
  decodeByOpcode(protocolCode: number, body: Uint8Array): { typeName: string; message: Message } | null {
    const key = protocolCode >>> 0;
    const t = this.types.get(key);
    if (!t) {
      return null;
    }
    const typeName = this.typeNames.get(key) ?? typeDisplayName(t, String(key));
    return { typeName, message: t.decode(body) };
  }

  encodeMessage(message: Message): Uint8Array {
    const t = message.$type;
    if (!t) {
      throw new Error(
        '[ProtoOuterDispatcher] message.$type is missing; use encodeBody(typeName, plain) for static modules'
      );
    }
    return t.encode(message).finish();
  }

  dispatch(packet: OuterPacket): void {
    const key = packet.protocolCode >>> 0;
    const t = this.types.get(key);
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
        typeName: this.typeNames.get(key) ?? typeDisplayName(t, String(key))
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
