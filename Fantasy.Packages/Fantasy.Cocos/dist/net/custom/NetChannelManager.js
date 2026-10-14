"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netChannel = exports.NetChannelManager = exports.NetChannelType = void 0;
const NetManager_1 = require("../NetManager");
const NetConfig_1 = require("./NetConfig");
const NetNodeGame_1 = require("./NetNodeGame");
var NetChannelType;
(function (NetChannelType) {
    /** 游戏服务器 */
    NetChannelType[NetChannelType["Game"] = 0] = "Game";
})(NetChannelType || (exports.NetChannelType = NetChannelType = {}));
class NetChannelManager {
    /** 创建游戏服务器节点 */
    gameCreate() {
        this.game = new NetNodeGame_1.NetNodeGame();
        this.game.setup();
        NetManager_1.NetManager.getInstance().setNetNode(this.game, NetChannelType.Game);
    }
    /** 连接游戏服务器（Fantasy Outer WebSocket） */
    gameConnect() {
        const scheme = NetConfig_1.NetConfig.useTls ? 'wss' : 'ws';
        const path = NetConfig_1.NetConfig.gamePath.startsWith('/')
            ? NetConfig_1.NetConfig.gamePath
            : `/${NetConfig_1.NetConfig.gamePath}`;
        NetManager_1.NetManager.getInstance().connect({
            url: `${scheme}://${NetConfig_1.NetConfig.gameIp}:${NetConfig_1.NetConfig.gamePort}${path}`,
            autoReconnect: NetConfig_1.NetConfig.autoReconnect,
        }, NetChannelType.Game);
    }
    /** 断开游戏服务器 */
    gameClose() {
        NetManager_1.NetManager.getInstance().close(undefined, undefined, NetChannelType.Game);
    }
}
exports.NetChannelManager = NetChannelManager;
exports.netChannel = new NetChannelManager();
//# sourceMappingURL=NetChannelManager.js.map