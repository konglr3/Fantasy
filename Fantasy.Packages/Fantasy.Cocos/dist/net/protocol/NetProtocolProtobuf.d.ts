import type { ProtoOuterDispatcher } from '../../protobuf/ProtoOuterDispatcher';
import { IProtocolHelper, IRequestProtocol, IResponseProtocol, NetData } from '../NetInterface';
/**
 * Fantasy Outer 协议编解码（20 字节小端包头 + protobuf body）。
 * 与 Fantasy.Net / Fantasy.Unity Packet 布局一致。
 */
export declare class NetProtocolProtobuf extends IProtocolHelper {
    private readonly reassembler;
    private dispatcher;
    private defaultAddress;
    /** 注入 protobuf 分发器（由导出协议 ProtoOuterDispatcherInit 注册） */
    setDispatcher(dispatcher: ProtoOuterDispatcher | null): void;
    getDispatcher(): ProtoOuterDispatcher | null;
    setDefaultAddress(address: bigint): void;
    clearReassembler(): void;
    encode(ireqp: IRequestProtocol): void;
    /** 编码不带 rpc 等待的推送/通知（rpcId=0） */
    encodeFireAndForget(cmd: number, reqName?: string, params?: Record<string, unknown>, address?: bigint): Uint8Array;
    decodeFrames(msg: NetData): IResponseProtocol[];
    decodeCommon(msg: NetData): IResponseProtocol;
    decodeCustom(ireqp: IRequestProtocol, iresp: IResponseProtocol): void;
    buildHeartbeat(): Uint8Array | null;
}
//# sourceMappingURL=NetProtocolProtobuf.d.ts.map