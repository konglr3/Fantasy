import { encodeOuterFrame, OuterStreamReassembler } from './OuterStreamReassembler';
export class WebSocketSession {
    constructor() {
        this.reassembler = new OuterStreamReassembler();
        this.onOuterPacket = null;
        this.onClose = null;
        this.onError = null;
        this.ws = null;
    }
    get readyState() {
        return this.ws?.readyState ?? WebSocket.CLOSED;
    }
    connect(url) {
        return new Promise((resolve, reject) => {
            const socket = new WebSocket(url);
            socket.binaryType = 'arraybuffer';
            this.ws = socket;
            socket.onopen = () => resolve();
            socket.onerror = (ev) => {
                this.onError?.(ev);
                reject(new Error('WebSocket error'));
            };
            socket.onclose = () => {
                this.onClose?.();
                this.ws = null;
            };
            socket.onmessage = (ev) => {
                const data = ev.data;
                if (data instanceof ArrayBuffer) {
                    const u8 = new Uint8Array(data);
                    this.reassembler.append(u8);
                    const packets = this.reassembler.takePackets();
                    if (this.onOuterPacket) {
                        for (const p of packets) {
                            this.onOuterPacket(p);
                        }
                    }
                }
            };
        });
    }
    sendFrame(frame) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('WebSocket is not open');
        }
        this.ws.send(frame);
    }
    sendOuter(params) {
        this.sendFrame(encodeOuterFrame(params));
    }
    dispose() {
        this.reassembler.clear();
        if (this.ws) {
            this.ws.onopen = null;
            this.ws.onerror = null;
            this.ws.onclose = null;
            this.ws.onmessage = null;
            try {
                this.ws.close();
            }
            catch {
                // ignore
            }
            this.ws = null;
        }
        this.onOuterPacket = null;
        this.onClose = null;
        this.onError = null;
    }
}
//# sourceMappingURL=WebSocketSession.js.map