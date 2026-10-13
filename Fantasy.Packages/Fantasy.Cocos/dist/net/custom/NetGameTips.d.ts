import { INetworkTips } from '../NetInterface';
/** 游戏服务器网络提示（可按项目替换为 UI） */
export declare class NetGameTips implements INetworkTips {
    connectTips(isShow: boolean): void;
    reconnectTips(): void;
    requestTips(isShow: boolean): void;
    disconnectTips(isShow: boolean): void;
}
//# sourceMappingURL=NetGameTips.d.ts.map