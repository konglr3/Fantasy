/** Fantasy Gate WebSocket 默认连接配置 */
export class NetConfig {
}
/** 游戏服务器 IP / Host */
NetConfig.gameIp = '127.0.0.1';
/** 游戏服务器端口（Fantasy 示例默认 20000） */
NetConfig.gamePort = '20000';
/** WebSocket path，需与服务端 Outer 监听一致 */
NetConfig.gamePath = '/';
/** 是否使用 wss */
NetConfig.useTls = false;
/** -1 永久重连，0 不重连，正整数为次数 */
NetConfig.autoReconnect = -1;
//# sourceMappingURL=NetConfig.js.map