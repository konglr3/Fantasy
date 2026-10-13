import { Logger } from './Logger';
/**
 * WebSocket 封装（Fantasy Outer 二进制帧）
 */
export class WebSock {
    constructor() {
        this._ws = null;
        this.onConnected = null;
        this.onMessage = null;
        this.onError = null;
        this.onClosed = null;
    }
    connect(options) {
        if (this._ws && this._ws.readyState === WebSocket.CONNECTING) {
            Logger.logNet('websocket connecting, wait for a moment...');
            return false;
        }
        let url = options.url ?? null;
        if (!url) {
            const host = options.host || options.ip;
            const port = options.port;
            const scheme = options.protocol || 'ws';
            const path = options.path
                ? options.path.startsWith('/')
                    ? options.path
                    : `/${options.path}`
                : '';
            url = `${scheme}://${host}:${port}${path}`;
        }
        this._ws = new WebSocket(url);
        this._ws.binaryType = options.binaryType ? options.binaryType : 'arraybuffer';
        this._ws.onmessage = (event) => {
            this.onMessage(event.data);
        };
        this._ws.onopen = this.onConnected;
        this._ws.onerror = this.onError;
        this._ws.onclose = this.onClosed;
        return true;
    }
    send(buffer) {
        if (this._ws && this._ws.readyState == WebSocket.OPEN) {
            this._ws.send(buffer);
            return 1;
        }
        return -1;
    }
    close(code, reason) {
        if (this._ws) {
            this._ws.close(code, reason);
            this._ws = null;
        }
    }
}
//# sourceMappingURL=WebSock.js.map