import type { ProtoOuterDispatcher } from '../../protobuf/ProtoOuterDispatcher';
import { OpCode } from '../../network/OpCode';
import { encodeOuterFrame, OuterStreamReassembler } from '../../network/OuterStreamReassembler';
import {
  IProtocolHelper,
  IRequestProtocol,
  IResponseProtocol,
  NetData,
} from '../NetInterface';

function toUint8Array(msg: NetData): Uint8Array {
  if (msg instanceof ArrayBuffer) {
    return new Uint8Array(msg);
  }
  if (ArrayBuffer.isView(msg)) {
    return new Uint8Array(msg.buffer, msg.byteOffset, msg.byteLength);
  }
  if (typeof msg === 'string') {
    throw new Error('[NetProtocolProtobuf] Fantasy Outer 仅支持二进制帧，收到 string');
  }
  throw new Error('[NetProtocolProtobuf] 不支持的消息类型');
}

/**
 * Fantasy Outer 协议编解码（20 字节小端包头 + protobuf body）。
 * 与 Fantasy.Net / Fantasy.Unity Packet 布局一致。
 */
export class NetProtocolProtobuf extends IProtocolHelper {
  private readonly reassembler = new OuterStreamReassembler();
  private dispatcher: ProtoOuterDispatcher | null = null;
  private defaultAddress = 0n;

  /** 注入 protobuf 分发器（由导出协议 ProtoOuterDispatcherInit 注册） */
  setDispatcher(dispatcher: ProtoOuterDispatcher | null): void {
    this.dispatcher = dispatcher;
  }

  getDispatcher(): ProtoOuterDispatcher | null {
    return this.dispatcher;
  }

  setDefaultAddress(address: bigint): void {
    this.defaultAddress = address;
  }

  clearReassembler(): void {
    this.reassembler.clear();
  }

  override encode(ireqp: IRequestProtocol): void {
    ireqp.id = this.getRequestId();
    const address = ireqp.address ?? this.defaultAddress;

    let body = new Uint8Array(0);
    if (ireqp.reqName && ireqp.params != null) {
      if (!this.dispatcher) {
        throw new Error(
          '[NetProtocolProtobuf] 未设置 ProtoOuterDispatcher，无法编码。请先 setDispatcher() 并 registerOuterProtobufMessages。'
        );
      }
      body = this.dispatcher.encodeBody(ireqp.reqName, ireqp.params);
    }

    ireqp.buffer = encodeOuterFrame({
      rpcId: ireqp.id!,
      address,
      protocolCode: ireqp.cmd >>> 0,
      body,
    });
  }

  /** 编码不带 rpc 等待的推送/通知（rpcId=0） */
  encodeFireAndForget(
    cmd: number,
    reqName?: string,
    params?: Record<string, unknown>,
    address?: bigint
  ): Uint8Array {
    let body = new Uint8Array(0);
    if (reqName && params != null) {
      if (!this.dispatcher) {
        throw new Error('[NetProtocolProtobuf] 未设置 ProtoOuterDispatcher');
      }
      body = this.dispatcher.encodeBody(reqName, params);
    }
    return encodeOuterFrame({
      rpcId: 0,
      address: address ?? this.defaultAddress,
      protocolCode: cmd >>> 0,
      body,
    });
  }

  override decodeFrames(msg: NetData): IResponseProtocol[] {
    this.reassembler.append(toUint8Array(msg));
    return this.reassembler.takePackets().map((packet) => ({
      id: packet.rpcId >>> 0,
      cmd: packet.protocolCode >>> 0,
      code: 0,
      address: packet.address,
      data: packet.body,
    }));
  }

  override decodeCommon(msg: NetData): IResponseProtocol {
    const frames = this.decodeFrames(msg);
    return frames[0] ?? null!;
  }

  override decodeCustom(ireqp: IRequestProtocol, iresp: IResponseProtocol): void {
    const body = iresp.data;
    if (!(body instanceof Uint8Array) || !this.dispatcher) {
      return;
    }

    try {
      if (ireqp.respName) {
        const decoded = this.dispatcher.decodeBody(ireqp.respName, body);
        iresp.data = decoded;
        const err = (decoded as { errorCode?: number }).errorCode;
        if (typeof err === 'number') {
          iresp.code = err;
        }
        return;
      }

      const byOpcode = this.dispatcher.decodeByOpcode(iresp.cmd, body);
      if (byOpcode) {
        iresp.data = byOpcode.message;
        const err = (byOpcode.message as { errorCode?: number }).errorCode;
        if (typeof err === 'number') {
          iresp.code = err;
        }
      }
    } catch {
      // 保留原始 Uint8Array body
    }
  }

  override buildHeartbeat(): Uint8Array | null {
    return encodeOuterFrame({
      rpcId: 0,
      address: 0n,
      protocolCode: OpCode.PingRequest,
      body: new Uint8Array(0),
    });
  }
}
