import { NetManager } from '../NetManager';
import { NetConfig } from './NetConfig';
import { NetNodeGame } from './NetNodeGame';
export var NetChannelType;
(function (NetChannelType) {
    /** 游戏服务器 */
    NetChannelType[NetChannelType["Game"] = 0] = "Game";
})(NetChannelType || (NetChannelType = {}));
export class NetChannelManager {
    /** 创建游戏服务器节点 */
    gameCreate() {
        this.game = new NetNodeGame();
        this.game.setup();
        NetManager.getInstance().setNetNode(this.game, NetChannelType.Game);
    }
    /** 连接游戏服务器（Fantasy Outer WebSocket） */
    gameConnect() {
        const scheme = NetConfig.useTls ? 'wss' : 'ws';
        const path = NetConfig.gamePath.startsWith('/')
            ? NetConfig.gamePath
            : `/${NetConfig.gamePath}`;
        NetManager.getInstance().connect({
            url: `${scheme}://${NetConfig.gameIp}:${NetConfig.gamePort}${path}`,
            autoReconnect: NetConfig.autoReconnect,
        }, NetChannelType.Game);
    }
    /** 断开游戏服务器 */
    gameClose() {
        NetManager.getInstance().close(undefined, undefined, NetChannelType.Game);
    }
}
export const netChannel = new NetChannelManager();
//# sourceMappingURL=NetChannelManager.js.map