import { NetNodeGame } from './NetNodeGame';
export declare enum NetChannelType {
    /** 游戏服务器 */
    Game = 0
}
export declare class NetChannelManager {
    game: NetNodeGame;
    /** 创建游戏服务器节点 */
    gameCreate(): void;
    /** 连接游戏服务器（Fantasy Outer WebSocket） */
    gameConnect(): void;
    /** 断开游戏服务器 */
    gameClose(): void;
}
export declare const netChannel: NetChannelManager;
//# sourceMappingURL=NetChannelManager.d.ts.map