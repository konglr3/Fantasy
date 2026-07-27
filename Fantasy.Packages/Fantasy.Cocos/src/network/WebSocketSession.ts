import { encodeOuterFrame, OuterPacket, OuterStreamReassembler } from './OuterStreamReassembler';

export interface SendOuterParams {
  rpcId: number;
  address: bigint;
  protocolCode: number;
  body: Uint8Array;
}

export class WebSocketSession {
  readonly reassembler = new OuterStreamReassembler();
  onOuterPacket: ((packet: OuterPacket) => void) | null = null;
  onClose: (() => void) | null = null;
  onError: ((err: Event) => void) | null = null;
  private ws: WebSocket | null = null;

  get readyState(): number {
    return this.ws?.readyState ?? WebSocket.CLOSED;
  }

  connect(url: string): Promise<void> {
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

  sendFrame(frame: Uint8Array): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket is not open');
    }
    this.ws.send(frame);
  }

  sendOuter(params: SendOuterParams): void {
    this.sendFrame(encodeOuterFrame(params));
  }

  dispose(): void {
    this.reassembler.clear();
    if (this.ws) {
      this.ws.onopen = null;
      this.ws.onerror = null;
      this.ws.onclose = null;
      this.ws.onmessage = null;
      try {
        this.ws.close();
      } catch {
        // ignore
      }
      this.ws = null;
    }
    this.onOuterPacket = null;
    this.onClose = null;
    this.onError = null;
  }
}
