import { ISocket, MessageFunc, NetData } from './NetInterface';
import type { NetConnectOptions } from './NetNode';
/**
 * WebSocket 封装（Fantasy Outer 二进制帧）
 */
export declare class WebSock implements ISocket {
    private _ws;
    onConnected: ((this: WebSocket, ev: Event) => any) | null;
    onMessage: MessageFunc;
    onError: ((this: WebSocket, ev: Event) => any) | null;
    onClosed: ((this: WebSocket, ev: CloseEvent) => any) | null;
    connect(options: NetConnectOptions & {
        ip?: string;
        binaryType?: BinaryType;
    }): boolean;
    send(buffer: NetData): number;
    close(code?: number, reason?: string): void;
}
//# sourceMappingURL=WebSock.d.ts.map