import { CallbackObject, INetworkTips, IProtocolHelper, IRequestProtocol, IResponseProtocol, ISocket, NetCallFunc, NetData } from './NetInterface';
type ExecuterFunc = (callback: CallbackObject, iresp: IResponseProtocol) => void;
type CheckFunc = (checkedFunc: VoidFunc) => void;
type VoidFunc = () => void;
type BoolFunc = () => boolean;
export declare class WebSocketReturn<T> {
    /** 是否请求成功 */
    isSucc: boolean;
    /** 请求返回数据 */
    res?: T;
    /** 请求错误数据 */
    err?: any;
}
/** 网络提示类型枚举 */
export declare enum NetTipsType {
    Connecting = 0,
    ReConnecting = 1,
    Requesting = 2,
    Disconnecting = 3
}
/** 网络状态枚举 */
export declare enum NetNodeState {
    Closed = 0,
    Connecting = 1,
    Checking = 2,
    Working = 3
}
/** 网络连接参数 */
export interface NetConnectOptions {
    host?: string;
    port?: number;
    url?: string;
    /** ws / wss，与 host+port 组合使用 */
    protocol?: string;
    path?: string;
    autoReconnect?: number;
}
/** 网络节点 */
export declare class NetNode {
    protected _connectOptions: NetConnectOptions | null;
    protected _autoReconnect: number;
    protected _isSocketInit: boolean;
    protected _isSocketOpen: boolean;
    protected _state: NetNodeState;
    protected _socket: ISocket;
    protected _networkTips: INetworkTips | null;
    protected _protocolHelper: IProtocolHelper;
    protected _connectedCallback: CheckFunc | null;
    protected _disconnectCallback: BoolFunc | null;
    protected _callbackExecuter: ExecuterFunc;
    protected _keepAliveTimer: ReturnType<typeof setTimeout> | null;
    protected _receiveMsgTimer: ReturnType<typeof setTimeout> | null;
    protected _reconnectTimer: ReturnType<typeof setTimeout> | null;
    protected _heartTime: number;
    protected _receiveTime: number;
    protected _reconnetTimeOut: number;
    protected _requests: IRequestProtocol[];
    protected _listener: {
        [key: number]: IRequestProtocol[] | null;
    };
    /** 当前连接状态 */
    get state(): NetNodeState;
    init(socket: ISocket, protocol: IProtocolHelper, networkTips?: INetworkTips | null, execFunc?: ExecuterFunc | null): void;
    connect(options: NetConnectOptions): boolean;
    protected updateNetTips(tipsType: NetTipsType, isShow: boolean): void;
    close(code?: number, reason?: string): void;
    closeSocket(code?: number, reason?: string): void;
    isAutoReconnect(): boolean;
    rejectReconnect(): void;
    protected initSocket(): void;
    protected onConnected(_event: any): void;
    protected onChecked(): void;
    /** 接收到 WebSocket 数据（可能含多个 Outer 包） */
    protected onMessage(msg: NetData): void;
    protected dispatchResponse(iresp: IResponseProtocol): void;
    protected onError(event: any): void;
    protected onClosed(_event: any): void;
    request(reqProtocol: IRequestProtocol, showTips?: boolean, force?: boolean): void;
    requestUnique(reqProtocol: IRequestProtocol, showTips?: boolean, force?: boolean): boolean;
    /** 发送不期待响应的 Outer 消息（rpcId=0） */
    sendNotify(cmd: number, buffer: Uint8Array): void;
    private base_request;
    addResponeHandler(reqProtocol: IRequestProtocol): void;
    removeResponeHandler(cmd: number, callback: NetCallFunc, target?: any): void;
    cleanListeners(cmd?: number): void;
    protected getNetListenersIndex(cmd: number, rspObject: CallbackObject): number;
    protected resetReceiveMsgTimer(): void;
    protected resetHearbeatTimer(): void;
    protected clearTimer(): void;
}
export {};
//# sourceMappingURL=NetNode.d.ts.map