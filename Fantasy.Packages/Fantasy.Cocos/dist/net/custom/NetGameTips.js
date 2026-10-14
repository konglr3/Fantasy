"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetGameTips = void 0;
const Logger_1 = require("../Logger");
/** 游戏服务器网络提示（可按项目替换为 UI） */
class NetGameTips {
    connectTips(isShow) {
        if (isShow) {
            Logger_1.Logger.logNet('游戏服务器正在连接');
        }
        else {
            Logger_1.Logger.logNet('游戏服务器连接成功');
        }
    }
    reconnectTips() {
        Logger_1.Logger.logNet('正在重连游戏服务器');
    }
    requestTips(isShow) {
        if (isShow) {
            Logger_1.Logger.logNet('有请求处理中');
        }
        else {
            Logger_1.Logger.logNet('所有请求结束');
        }
    }
    disconnectTips(isShow) {
        Logger_1.Logger.logNet('断网', isShow);
    }
}
exports.NetGameTips = NetGameTips;
//# sourceMappingURL=NetGameTips.js.map