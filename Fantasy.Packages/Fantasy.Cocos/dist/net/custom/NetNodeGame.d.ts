import type { ProtoOuterDispatcher } from '../../protobuf/ProtoOuterDispatcher';
import { NetCallFunc } from '../NetInterface';
import { NetNode, WebSocketReturn } from '../NetNode';
/** 面向 Fantasy 服务器的网络节点 */
export declare class NetNodeGame extends NetNode {
    private _gameProtocol;
    /** 初始化 Fantasy Outer 通道（WebSock + Protobuf + Tips） */
    setup(): void;
    /** 绑定协议导出生成的 ProtoOuterDispatcher */
    setProtoDispatcher(dispatcher: ProtoOuterDispatcher): void;
    getProtoDispatcher(): ProtoOuterDispatcher | null;
    /**
     * RPC 请求（等待同 rpcId 的 Response）
     * @param cmd OuterOpcode
     * @param reqName protobuf 类型名
     * @param respName 响应类型名
     * @param params plain object
     */
    req<T>(cmd: number, reqName: string, respName: string, params?: Record<string, unknown>, address?: bigint): Promise<WebSocketReturn<T>>;
    reqUnique<T>(cmd: number, reqName: string, respName: string, params?: Record<string, unknown>, address?: bigint): Promise<WebSocketReturn<T>>;
    /**
     * 发送不期待 Response 的 Outer 消息（对齐 Fantasy Session.Send，rpcId=0）
     * @alias notify
     */
    send(cmd: number, reqName?: string, params?: Record<string, unknown>, address?: bigint): void;
    /** 发送不期待 Response 的消息 */
    notify(cmd: number, reqName?: string, params?: Record<string, unknown>, address?: bigint): void;
    /**
     * RPC 调用（对齐 Fantasy Session.Call）：发送 Request，等待同 rpcId 的 Response。
     * @alias req
     */
    callRpc<T>(cmd: number, reqName: string, respName: string, params?: Record<string, unknown>, address?: bigint): Promise<WebSocketReturn<T>>;
    /**
     * 监听服务器推送
     */
    on(cmd: number, respName: string, callback: NetCallFunc, target?: any): void;
    off(cmd: number, callback: NetCallFunc, target?: any): void;
}
//# sourceMappingURL=NetNodeGame.d.ts.map