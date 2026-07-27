import { PacketConstants } from '../packet/PacketConstants';
import { MaxOuterMessageBodySize } from './ProgramDefine';

export interface OuterPacket {
  protocolCode: number;
  rpcId: number;
  address: bigint;
  body: Uint8Array;
}

const HEAD = PacketConstants.OuterPacketHeadLength;

export class OuterStreamReassembler {
  private buf = new Uint8Array(0);

  append(chunk: Uint8Array): void {
    if (chunk.byteLength === 0) {
      return;
    }

    const next = new Uint8Array(this.buf.byteLength + chunk.byteLength);
    next.set(this.buf, 0);
    next.set(chunk, this.buf.byteLength);
    this.buf = next;
  }

  takePackets(): OuterPacket[] {
    const out: OuterPacket[] = [];
    while (this.buf.byteLength >= HEAD) {
      const dv = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength);
      const packetBodyCount = dv.getInt32(0, true);
      const protocolCode = dv.getUint32(4, true);
      const rpcId = dv.getUint32(8, true);
      const address = dv.getBigInt64(12, true);

      if (packetBodyCount > MaxOuterMessageBodySize) {
        throw new Error(`Outer packet body length exceeds limit: ${packetBodyCount}`);
      }

      if (packetBodyCount === -1) {
        out.push({ protocolCode, rpcId, address, body: new Uint8Array(0) });
        this.buf = this.buf.subarray(HEAD);
        continue;
      }

      const total = HEAD + packetBodyCount;
      if (this.buf.byteLength < total) {
        return out;
      }

      const body = this.buf.slice(HEAD, total);
      out.push({ protocolCode, rpcId, address, body });
      this.buf = this.buf.subarray(total);
    }

    return out;
  }

  clear(): void {
    this.buf = new Uint8Array(0);
  }
}

export function encodeOuterFrame(params: {
  rpcId: number;
  address: bigint;
  protocolCode: number;
  body: Uint8Array;
}): Uint8Array {
  const bodyLen = params.body.byteLength;
  const packetBodyCount = bodyLen === 0 ? -1 : bodyLen;
  if (packetBodyCount > MaxOuterMessageBodySize) {
    throw new Error(`Outer packet body length exceeds limit: ${packetBodyCount}`);
  }

  const totalLen = HEAD + (packetBodyCount === -1 ? 0 : bodyLen);
  const u8 = new Uint8Array(totalLen);
  const dv = new DataView(u8.buffer);
  dv.setInt32(0, packetBodyCount, true);
  dv.setUint32(4, params.protocolCode >>> 0, true);
  dv.setUint32(8, params.rpcId >>> 0, true);
  dv.setBigInt64(12, params.address, true);
  if (bodyLen > 0) {
    u8.set(params.body, HEAD);
  }

  return u8;
}
