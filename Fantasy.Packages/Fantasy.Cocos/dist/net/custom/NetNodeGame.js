import { NetNode, WebSocketReturn } from '../NetNode';
import { isOuterPushDef, isOuterRpcDef, isOuterSendDef, } from '../ProtocolMeta';
import { WebSock } from '../WebSock';
import { NetProtocolProtobuf } from '../protocol/NetProtocolProtobuf';
import { NetErrorCode } from './NetErrorCode';
import { NetGameTips } from './NetGameTips';
/** Fantasy Outer Protobuf 协议 */
class GameProtocol extends NetProtocolProtobuf {
}
/** 面向 Fantasy 服务器的网络节点 */
export class NetNodeGame extends NetNode {
    /** 初始化 Fantasy Outer 通道（WebSock + Protobuf + Tips） */
    setup() {
        this._heartTime = 10000;
        this._receiveTime = 60000;
        this._reconnetTimeOut = 3000;
        this._gameProtocol = new GameProtocol();
        super.init(new WebSock(), this._gameProtocol, new NetGameTips());
    }
    /** 绑定协议导出生成的 ProtoOuterDispatcher */
    setProtoDispatcher(dispatcher) {
        this._gameProtocol.setDispatcher(dispatcher);
    }
    getProtoDispatcher() {
        return this._gameProtocol.getDispatcher();
    }
    /**
     * RPC 请求（等待同 rpcId 的 Response）
     * @param cmd OuterOpcode
     * @param reqName protobuf 类型名
     * @param respName 响应类型名
     * @param params plain object
     */
    req(cmd, reqName, respName, params, address = 0n) {
        return new Promise((resolve) => {
            const protocol = {
                cmd,
                params,
                reqName,
                respName,
                address,
                callback: {
                    target: this,
                    callback: (iresp) => {
                        const res = new WebSocketReturn();
                        res.isSucc = iresp.code == NetErrorCode.Success;
                        if (res.isSucc) {
                            res.res = iresp.data;
                        }
                        else {
                            res.err = iresp.code;
                        }
                        resolve(res);
                    },
                },
            };
            this.request(protocol);
        });
    }
    reqUnique(cmd, reqName, respName, params, address = 0n) {
        return new Promise((resolve, reject) => {
            const protocol = {
                cmd,
                params,
                reqName,
                respName,
                address,
                callback: {
                    target: this,
                    callback: (iresp) => {
                        const res = new WebSocketReturn();
                        res.isSucc = iresp.code == NetErrorCode.Success;
                        if (res.isSucc) {
                            res.res = iresp.data;
                        }
                        else {
                            res.err = iresp.code;
                        }
                        resolve(res);
                    },
                },
            };
            if (!this.requestUnique(protocol)) {
                reject(new Error(`duplicate request cmd=${cmd}`));
            }
        });
    }
    send(defOrCmd, reqNameOrParams, paramsOrAddress, address = 0n) {
        if (isOuterSendDef(defOrCmd) || isOuterRpcDef(defOrCmd)) {
            const def = defOrCmd;
            const params = reqNameOrParams;
            const addr = paramsOrAddress ?? 0n;
            this.notify(def.opcode, def.reqName, params, addr);
            return;
        }
        this.notify(defOrCmd, reqNameOrParams, paramsOrAddress, address);
    }
    /** 发送不期待 Response 的消息 */
    notify(cmd, reqName, params, address = 0n) {
        const buffer = this._gameProtocol.encodeFireAndForget(cmd, reqName, params, address);
        this.sendNotify(cmd, buffer);
    }
    callRpc(defOrCmd, reqNameOrParams, respNameOrAddress, params, address = 0n) {
        if (isOuterRpcDef(defOrCmd)) {
            const def = defOrCmd;
            return this.req(def.opcode, def.reqName, def.respName, reqNameOrParams, respNameOrAddress ?? 0n);
        }
        return this.req(defOrCmd, reqNameOrParams, respNameOrAddress, params, address);
    }
    on(defOrCmd, respNameOrCallback, callbackOrTarget, target) {
        if (isOuterPushDef(defOrCmd)) {
            const def = defOrCmd;
            this.addResponeHandler({
                cmd: def.opcode,
                respName: def.typeName,
                callback: {
                    target: callbackOrTarget,
                    callback: respNameOrCallback,
                },
            });
            return;
        }
        const co = {
            target: target,
            callback: callbackOrTarget,
        };
        const ireqp = {
            cmd: defOrCmd,
            respName: respNameOrCallback,
            callback: co,
        };
        this.addResponeHandler(ireqp);
    }
    off(cmd, callback, target) {
        this.removeResponeHandler(cmd, callback, target);
    }
}
//# sourceMappingURL=NetNodeGame.js.map