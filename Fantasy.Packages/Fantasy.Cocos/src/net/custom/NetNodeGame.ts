import type { ProtoOuterDispatcher } from '../../protobuf/ProtoOuterDispatcher';
import { CallbackObject, IRequestProtocol, IResponseProtocol, NetCallFunc } from '../NetInterface';
import { NetNode, WebSocketReturn } from '../NetNode';
import {
  isOuterPushDef,
  isOuterRpcDef,
  isOuterSendDef,
  OuterPushDef,
  OuterRpcDef,
  OuterSendDef,
} from '../ProtocolMeta';
import { WebSock } from '../WebSock';
import { NetProtocolProtobuf } from '../protocol/NetProtocolProtobuf';
import { NetErrorCode } from './NetErrorCode';
import { NetGameTips } from './NetGameTips';

/** Fantasy Outer Protobuf 协议 */
class GameProtocol extends NetProtocolProtobuf {}

/** 面向 Fantasy 服务器的网络节点 */
export class NetNodeGame extends NetNode {
  private _gameProtocol!: GameProtocol;

  /** 初始化 Fantasy Outer 通道（WebSock + Protobuf + Tips） */
  setup(): void {
    this._heartTime = 10000;
    this._receiveTime = 60000;
    this._reconnetTimeOut = 3000;
    this._gameProtocol = new GameProtocol();
    super.init(new WebSock(), this._gameProtocol, new NetGameTips());
  }

  /** 绑定协议导出生成的 ProtoOuterDispatcher */
  setProtoDispatcher(dispatcher: ProtoOuterDispatcher): void {
    this._gameProtocol.setDispatcher(dispatcher);
  }

  getProtoDispatcher(): ProtoOuterDispatcher | null {
    return this._gameProtocol.getDispatcher();
  }

  /**
   * RPC 请求（等待同 rpcId 的 Response）
   * @param cmd OuterOpcode
   * @param reqName protobuf 类型名
   * @param respName 响应类型名
   * @param params plain object
   */
  public req<T>(
    cmd: number,
    reqName: string,
    respName: string,
    params?: Record<string, unknown>,
    address: bigint = 0n
  ): Promise<WebSocketReturn<T>> {
    return new Promise((resolve) => {
      const protocol: IRequestProtocol = {
        cmd,
        params,
        reqName,
        respName,
        address,
        callback: {
          target: this,
          callback: (iresp: IResponseProtocol) => {
            const res = new WebSocketReturn<T>();
            res.isSucc = iresp.code == NetErrorCode.Success;
            if (res.isSucc) {
              res.res = iresp.data;
            } else {
              res.err = iresp.code;
            }
            resolve(res);
          },
        },
      };
      this.request(protocol);
    });
  }

  public reqUnique<T>(
    cmd: number,
    reqName: string,
    respName: string,
    params?: Record<string, unknown>,
    address: bigint = 0n
  ): Promise<WebSocketReturn<T>> {
    return new Promise((resolve, reject) => {
      const protocol: IRequestProtocol = {
        cmd,
        params,
        reqName,
        respName,
        address,
        callback: {
          target: this,
          callback: (iresp: IResponseProtocol) => {
            const res = new WebSocketReturn<T>();
            res.isSucc = iresp.code == NetErrorCode.Success;
            if (res.isSucc) {
              res.res = iresp.data;
            } else {
              res.err = iresp.code;
            }
            resolve(res);
          },
        },
      };
      if (!this.requestUnique(protocol)) {
        reject(new Error(`duplicate request cmd=${cmd}`));
      }
    });
  }

  /**
   * 发送不期待 Response 的 Outer 消息（对齐 Fantasy Session.Send，rpcId=0）
   *
   * 简化写法（协议导出 OuterSend）：
   * `send(OuterSend.C2G_TestMessage, { Tag: 'hi' })`
   */
  public send<TReq = Record<string, unknown>>(
    def: OuterSendDef<TReq>,
    params?: TReq,
    address?: bigint
  ): void;
  public send(
    cmd: number,
    reqName?: string,
    params?: Record<string, unknown>,
    address?: bigint
  ): void;
  public send(
    defOrCmd: number | OuterSendDef,
    reqNameOrParams?: string | Record<string, unknown>,
    paramsOrAddress?: Record<string, unknown> | bigint,
    address: bigint = 0n
  ): void {
    if (isOuterSendDef(defOrCmd) || isOuterRpcDef(defOrCmd)) {
      const def = defOrCmd;
      const params = reqNameOrParams as Record<string, unknown> | undefined;
      const addr = (paramsOrAddress as bigint | undefined) ?? 0n;
      this.notify(def.opcode, def.reqName, params, addr);
      return;
    }

    this.notify(
      defOrCmd,
      reqNameOrParams as string | undefined,
      paramsOrAddress as Record<string, unknown> | undefined,
      address
    );
  }

  /** 发送不期待 Response 的消息 */
  public notify(
    cmd: number,
    reqName?: string,
    params?: Record<string, unknown>,
    address: bigint = 0n
  ): void {
    const buffer = this._gameProtocol.encodeFireAndForget(cmd, reqName, params, address);
    this.sendNotify(cmd, buffer);
  }

  /**
   * RPC 调用（对齐 Fantasy Session.Call）
   *
   * `call(OuterRpc.C2G_ConnectRoamingRequest, {})`
   * → `Promise<WebSocketReturn<G2C_ConnectRoamingResponse>>`
   */
  public call<TResp, TReq = Record<string, unknown>>(
    def: OuterRpcDef<TResp, TReq>,
    params?: TReq,
    address?: bigint
  ): Promise<WebSocketReturn<TResp>>;
  public call(
    cmd: number,
    reqName: string,
    respName: string,
    params?: Record<string, unknown>,
    address?: bigint
  ): Promise<WebSocketReturn<unknown>>;
  public call(
    defOrCmd: number | OuterRpcDef<any, any>,
    reqNameOrParams?: string | Record<string, unknown>,
    respNameOrAddress?: string | bigint,
    params?: Record<string, unknown>,
    address: bigint = 0n
  ): Promise<WebSocketReturn<any>> {
    if (isOuterRpcDef(defOrCmd)) {
      const def = defOrCmd;
      return this.req(
        def.opcode,
        def.reqName,
        def.respName,
        reqNameOrParams as Record<string, unknown> | undefined,
        (respNameOrAddress as bigint | undefined) ?? 0n
      );
    }

    return this.req(
      defOrCmd,
      reqNameOrParams as string,
      respNameOrAddress as string,
      params,
      address
    );
  }

  /** @alias call */
  public callRpc<TResp, TReq = Record<string, unknown>>(
    def: OuterRpcDef<TResp, TReq>,
    params?: TReq,
    address?: bigint
  ): Promise<WebSocketReturn<TResp>>;
  public callRpc(
    cmd: number,
    reqName: string,
    respName: string,
    params?: Record<string, unknown>,
    address?: bigint
  ): Promise<WebSocketReturn<unknown>>;
  public callRpc(
    defOrCmd: number | OuterRpcDef<any, any>,
    reqNameOrParams?: string | Record<string, unknown>,
    respNameOrAddress?: string | bigint,
    params?: Record<string, unknown>,
    address: bigint = 0n
  ): Promise<WebSocketReturn<any>> {
    return this.call(
      defOrCmd as never,
      reqNameOrParams as never,
      respNameOrAddress as never,
      params,
      address
    );
  }

  /**
   * 监听服务器推送
   *
   * 简化写法：`on(OuterPush.G2C_PushMessage, (data) => { ... })`
   */
  public on<TData>(
    def: OuterPushDef<TData>,
    callback: (data: TData, ...args: any[]) => void,
    target?: any
  ): void;
  public on(cmd: number, respName: string, callback: NetCallFunc, target?: any): void;
  public on(
    defOrCmd: number | OuterPushDef,
    respNameOrCallback: string | NetCallFunc,
    callbackOrTarget?: NetCallFunc | any,
    target?: any
  ): void {
    if (isOuterPushDef(defOrCmd)) {
      const def = defOrCmd;
      this.addResponeHandler({
        cmd: def.opcode,
        respName: def.typeName,
        callback: {
          target: callbackOrTarget,
          callback: respNameOrCallback as NetCallFunc,
        },
      });
      return;
    }

    const co: CallbackObject = {
      target: target,
      callback: callbackOrTarget as NetCallFunc,
    };
    const ireqp: IRequestProtocol = {
      cmd: defOrCmd,
      respName: respNameOrCallback as string,
      callback: co,
    };
    this.addResponeHandler(ireqp);
  }

  off(cmd: number, callback: NetCallFunc, target?: any): void {
    this.removeResponeHandler(cmd, callback, target);
  }
}
