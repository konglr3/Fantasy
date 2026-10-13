import { IProtocolHelper, IRequestProtocol, IResponseProtocol, NetData } from '../NetInterface';
/** JSON 数据协议（非 Fantasy Outer，仅作示例保留） */
export declare class NetProtocolJson extends IProtocolHelper {
    encode(ireqp: IRequestProtocol): void;
    decodeCommon(msg: NetData): IResponseProtocol;
    decodeCustom(_ireqp: IRequestProtocol, _iresp: IResponseProtocol): void;
}
//# sourceMappingURL=NetProtocolJson.d.ts.map