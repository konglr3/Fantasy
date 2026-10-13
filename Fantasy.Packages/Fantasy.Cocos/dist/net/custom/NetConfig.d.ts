/** Fantasy Gate WebSocket 默认连接配置 */
export declare class NetConfig {
    /** 游戏服务器 IP / Host */
    static gameIp: string;
    /** 游戏服务器端口（Fantasy 示例默认 20000） */
    static gamePort: string;
    /** WebSocket path，需与服务端 Outer 监听一致 */
    static gamePath: string;
    /** 是否使用 wss */
    static useTls: boolean;
    /** -1 永久重连，0 不重连，正整数为次数 */
    static autoReconnect: number;
}
//# sourceMappingURL=NetConfig.d.ts.map