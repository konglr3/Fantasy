import { IProtocolHelper } from '../NetInterface';
/** JSON 数据协议（非 Fantasy Outer，仅作示例保留） */
export class NetProtocolJson extends IProtocolHelper {
    encode(ireqp) {
        ireqp.id = this.getRequestId();
        const data = {
            id: ireqp.id,
            cmd: ireqp.cmd,
            data: JSON.stringify(ireqp.params ?? {}),
        };
        ireqp.buffer = JSON.stringify(data);
    }
    decodeCommon(msg) {
        const json = JSON.parse(String(msg));
        return {
            id: json.id,
            cmd: json.cmd,
            code: json.code,
            data: JSON.parse(json.data),
        };
    }
    decodeCustom(_ireqp, _iresp) { }
}
//# sourceMappingURL=NetProtocolJson.js.map