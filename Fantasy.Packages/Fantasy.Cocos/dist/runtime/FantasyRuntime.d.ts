import { Scene } from './Scene';
import { WebSocketSession } from '../network/WebSocketSession';
export declare enum NetworkProtocolType {
    TCP = 0,
    KCP = 1,
    WebSocket = 2
}
export interface ConnectOptions {
    remoteHost: string;
    remotePort: number;
    protocol: NetworkProtocolType;
    useTls?: boolean;
    path?: string;
    connectTimeoutMs?: number;
}
export declare class FantasyRuntime {
    private static _scene;
    private static _session;
    static get scene(): Scene;
    static get session(): WebSocketSession;
    static connect(options: ConnectOptions): Promise<WebSocketSession>;
    static dispose(): void;
}
//# sourceMappingURL=FantasyRuntime.d.ts.map