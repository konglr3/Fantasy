import type { ProtoOuterDispatcher } from '../../protobuf/ProtoOuterDispatcher';
import { NetCallFunc } from '../NetInterface';
import { NetNode, WebSocketReturn } from '../NetNode';
import { OuterPushDef, OuterRpcDef, OuterSendDef } from '../ProtocolMeta';
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
     *
     * 简化写法（协议导出 OuterSend）：
     * `send(OuterSend.C2G_TestMessage, { Tag: 'hi' })`
     */
    send<TReq = Record<string, unknown>>(def: OuterSendDef<TReq>, params?: TReq, address?: bigint): void;
    send(cmd: number, reqName?: string, params?: Record<string, unknown>, address?: bigint): void;
    /** 发送不期待 Response 的消息 */
    notify(cmd: number, reqName?: string, params?: Record<string, unknown>, address?: bigint): void;
    /**
     * RPC 调用（对齐 Fantasy Session.Call）
     *
     * `call(OuterRpc.C2G_ConnectRoamingRequest, {})`
     * → `Promise<WebSocketReturn<G2C_ConnectRoamingResponse>>`
     */
    call<TResp, TReq = Record<string, unknown>>(def: OuterRpcDef<TResp, TReq>, params?: TReq, address?: bigint): Promise<WebSocketReturn<TResp>>;
    call(cmd: number, reqName: string, respName: string, params?: Record<string, unknown>, address?: bigint): Promise<WebSocketReturn<unknown>>;
    /** @alias call */
    callRpc<TResp, TReq = Record<string, unknown>>(def: OuterRpcDef<TResp, TReq>, params?: TReq, address?: bigint): Promise<WebSocketReturn<TResp>>;
    callRpc(cmd: number, reqName: string, respName: string, params?: Record<string, unknown>, address?: bigint): Promise<WebSocketReturn<unknown>>;
    /**
     * 监听服务器推送
     *
     * 简化写法：`on(OuterPush.G2C_PushMessage, (data) => { ... })`
     */
    on<TData>(def: OuterPushDef<TData>, callback: (data: TData, ...args: any[]) => void, target?: any): void;
    on(cmd: number, respName: string, callback: NetCallFunc, target?: any): void;
    off(cmd: number, callback: NetCallFunc, target?: any): void;
}
//# sourceMappingURL=NetNodeGame.d.ts.map