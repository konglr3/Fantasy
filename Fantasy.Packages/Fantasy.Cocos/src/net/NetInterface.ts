/*
 * 网络相关接口定义（Fantasy Outer 协议适配）
 */
export type NetData = string | ArrayBufferLike | Blob | ArrayBufferView;
export type NetCallFunc = (data: any) => void;

/** 请求协议 */
export interface IRequestProtocol {
  /** 请求唯一编号（映射 Fantasy Outer rpcId） */
  id?: number;
  /** 协议 OpCode（映射 Fantasy Outer protocolCode） */
  cmd: number;
  /** 请求对象名（protobufjs type name） */
  reqName?: string;
  /** 接受对象名（protobufjs type name） */
  respName?: string;
  /** 消息内容（plain object） */
  params?: Record<string, unknown>;
  /** 请求二进制数据 */
  buffer?: NetData;
  /** Route / Addressable 地址，默认 0 */
  address?: bigint;
  /** 等待响应的回调对象 */
  callback?: CallbackObject;
}

/** 响应协议 */
export interface IResponseProtocol {
  /** 请求唯一编号（rpcId） */
  id: number;
  /** 响应协议命令码（protocolCode） */
  cmd: number;
  /** 响应错误码（来自 Response.errorCode，0 为成功） */
  code: number;
  /** Route 地址 */
  address?: bigint;
  /** 协议数据（解码后对象或原始 body） */
  data?: any;
}

/** 回调对象 */
export interface CallbackObject {
  /** 回调对象 */
  target: any;
  /** 回调函数 */
  callback: NetCallFunc;
}

/** 协议辅助接口 */
export class IProtocolHelper {
  protected _requestId = 0;

  /** 获取请求唯一编号（跳过 0，与 Fantasy Session rpcId 语义一致） */
  protected getRequestId(): number {
    this._requestId = (this._requestId + 1) >>> 0;
    if (this._requestId === 0) {
      this._requestId = 1;
    }
    return this._requestId;
  }

  /** 处理请求包数据 */
  encode(_ireqp: IRequestProtocol): void {}

  /**
   * 解析一帧网络数据中的全部完整包（支持粘包）。
   * 默认实现走 decodeCommon 单包路径。
   */
  decodeFrames(msg: NetData): IResponseProtocol[] {
    const one = this.decodeCommon(msg);
    return one ? [one] : [];
  }

  /** 解析通用响应数据（单包；兼容旧调用） */
  decodeCommon(_msg: NetData): IResponseProtocol {
    return null!;
  }

  /** 解析自定义响应数据（protobuf body → 对象） */
  decodeCustom(_ireqp: IRequestProtocol, _iresp: IResponseProtocol): void {}

  /** 返回心跳包二进制；无则返回 null */
  buildHeartbeat(): Uint8Array | null {
    return null;
  }

  /** @deprecated 使用 buildHeartbeat */
  onHearbeat(): void {}
}

export type SocketFunc = (event: any) => void;
export type MessageFunc = (msg: NetData) => void;

/** Socket接口 */
export interface ISocket {
  onConnected: SocketFunc | null;
  onMessage: MessageFunc | null;
  onError: SocketFunc | null;
  onClosed: SocketFunc | null;
  connect(options: any): any;
  send(buffer: NetData): number;
  close(code?: number, reason?: string): void;
}

/** 网络提示接口 */
export interface INetworkTips {
  connectTips(isShow: boolean): void;
  disconnectTips(isShow: boolean): void;
  reconnectTips(): void;
  requestTips(isShow: boolean): void;
}
