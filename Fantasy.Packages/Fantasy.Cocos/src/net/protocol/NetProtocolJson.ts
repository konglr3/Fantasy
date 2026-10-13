import { IProtocolHelper, IRequestProtocol, IResponseProtocol, NetData } from '../NetInterface';

/** JSON 数据协议（非 Fantasy Outer，仅作示例保留） */
export class NetProtocolJson extends IProtocolHelper {
  override encode(ireqp: IRequestProtocol): void {
    ireqp.id = this.getRequestId();

    const data: Record<string, unknown> = {
      id: ireqp.id,
      cmd: ireqp.cmd,
      data: JSON.stringify(ireqp.params ?? {}),
    };
    ireqp.buffer = JSON.stringify(data);
  }

  override decodeCommon(msg: NetData): IResponseProtocol {
    const json = JSON.parse(String(msg));
    return {
      id: json.id,
      cmd: json.cmd,
      code: json.code,
      data: JSON.parse(json.data),
    };
  }

  override decodeCustom(_ireqp: IRequestProtocol, _iresp: IResponseProtocol): void {}
}
