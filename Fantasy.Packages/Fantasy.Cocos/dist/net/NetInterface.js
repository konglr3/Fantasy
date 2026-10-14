"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProtocolHelper = void 0;
/** 协议辅助接口 */
class IProtocolHelper {
    constructor() {
        this._requestId = 0;
    }
    /** 获取请求唯一编号（跳过 0，与 Fantasy Session rpcId 语义一致） */
    getRequestId() {
        this._requestId = (this._requestId + 1) >>> 0;
        if (this._requestId === 0) {
            this._requestId = 1;
        }
        return this._requestId;
    }
    /** 处理请求包数据 */
    encode(_ireqp) { }
    /**
     * 解析一帧网络数据中的全部完整包（支持粘包）。
     * 默认实现走 decodeCommon 单包路径。
     */
    decodeFrames(msg) {
        const one = this.decodeCommon(msg);
        return one ? [one] : [];
    }
    /** 解析通用响应数据（单包；兼容旧调用） */
    decodeCommon(_msg) {
        return null;
    }
    /** 解析自定义响应数据（protobuf body → 对象） */
    decodeCustom(_ireqp, _iresp) { }
    /** 返回心跳包二进制；无则返回 null */
    buildHeartbeat() {
        return null;
    }
    /** @deprecated 使用 buildHeartbeat */
    onHearbeat() { }
}
exports.IProtocolHelper = IProtocolHelper;
//# sourceMappingURL=NetInterface.js.map