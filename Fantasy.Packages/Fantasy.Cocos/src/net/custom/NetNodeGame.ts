import type { ProtoOuterDispatcher } from '../../protobuf/ProtoOuterDispatcher';
import { CallbackObject, IRequestProtocol, IResponseProtocol, NetCallFunc } from '../NetInterface';
import { NetNode, WebSocketReturn } from '../NetNode';
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
   * 监听服务器推送
   */
  on(cmd: number, respName: string, callback: NetCallFunc, target?: any): void {
    const co: CallbackObject = {
      target: target,
      callback: callback,
    };
    const ireqp: IRequestProtocol = {
      cmd: cmd,
      respName: respName,
      callback: co,
    };
    this.addResponeHandler(ireqp);
  }

  off(cmd: number, callback: NetCallFunc, target?: any): void {
    this.removeResponeHandler(cmd, callback, target);
  }
}
