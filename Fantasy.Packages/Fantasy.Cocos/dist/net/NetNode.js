"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetNode = exports.NetNodeState = exports.NetTipsType = exports.WebSocketReturn = void 0;
const Logger_1 = require("./Logger");
const NetNodeStateStrs = ['已关闭', '连接中', '验证中', '可传输数据'];
class WebSocketReturn {
    constructor() {
        /** 是否请求成功 */
        this.isSucc = false;
    }
}
exports.WebSocketReturn = WebSocketReturn;
/** 网络提示类型枚举 */
var NetTipsType;
(function (NetTipsType) {
    NetTipsType[NetTipsType["Connecting"] = 0] = "Connecting";
    NetTipsType[NetTipsType["ReConnecting"] = 1] = "ReConnecting";
    NetTipsType[NetTipsType["Requesting"] = 2] = "Requesting";
    NetTipsType[NetTipsType["Disconnecting"] = 3] = "Disconnecting";
})(NetTipsType || (exports.NetTipsType = NetTipsType = {}));
/** 网络状态枚举 */
var NetNodeState;
(function (NetNodeState) {
    NetNodeState[NetNodeState["Closed"] = 0] = "Closed";
    NetNodeState[NetNodeState["Connecting"] = 1] = "Connecting";
    NetNodeState[NetNodeState["Checking"] = 2] = "Checking";
    NetNodeState[NetNodeState["Working"] = 3] = "Working";
})(NetNodeState || (exports.NetNodeState = NetNodeState = {}));
/** 网络节点 */
class NetNode {
    constructor() {
        this._connectOptions = null;
        this._autoReconnect = 0;
        this._isSocketInit = false;
        this._isSocketOpen = false;
        this._state = NetNodeState.Closed;
        this._socket = null;
        this._networkTips = null;
        this._protocolHelper = null;
        this._connectedCallback = null;
        this._disconnectCallback = null;
        this._callbackExecuter = null;
        this._keepAliveTimer = null;
        this._receiveMsgTimer = null;
        this._reconnectTimer = null;
        this._heartTime = 10000;
        this._receiveTime = 30000;
        this._reconnetTimeOut = 5000;
        this._requests = [];
        this._listener = {};
    }
    /** 当前连接状态 */
    get state() {
        return this._state;
    }
    init(socket, protocol, networkTips = null, execFunc = null) {
        Logger_1.Logger.logNet('网络初始化');
        this._socket = socket;
        this._protocolHelper = protocol;
        this._networkTips = networkTips;
        this._callbackExecuter = execFunc
            ? execFunc
            : (callback, iresp) => {
                callback.callback.call(callback.target, iresp);
            };
    }
    connect(options) {
        if (this._socket && this._state == NetNodeState.Closed) {
            if (!this._isSocketInit) {
                this.initSocket();
            }
            this._state = NetNodeState.Connecting;
            if (!this._socket.connect(options)) {
                this.updateNetTips(NetTipsType.Connecting, false);
                return false;
            }
            if (this._connectOptions == null && typeof options.autoReconnect == 'number') {
                this._autoReconnect = options.autoReconnect;
            }
            this._connectOptions = options;
            this.updateNetTips(NetTipsType.Connecting, true);
            return true;
        }
        return false;
    }
    updateNetTips(tipsType, isShow) {
        if (!this._networkTips) {
            return;
        }
        if (tipsType == NetTipsType.Requesting) {
            this._networkTips.requestTips(isShow);
        }
        else if (tipsType == NetTipsType.Connecting) {
            this._networkTips.connectTips(isShow);
        }
        else if (tipsType == NetTipsType.ReConnecting) {
            this._networkTips.reconnectTips();
        }
        else if (tipsType == NetTipsType.Disconnecting) {
            this._networkTips.disconnectTips(isShow);
        }
    }
    close(code, reason) {
        if (this._state == NetNodeState.Closed) {
            Logger_1.Logger.logNet('网络节点已断开');
            return;
        }
        this.clearTimer();
        this._listener = {};
        this._requests.length = 0;
        if (this._networkTips) {
            this._networkTips.connectTips(false);
            this._networkTips.requestTips(false);
        }
        if (this._socket) {
            this.updateNetTips(NetTipsType.Disconnecting, false);
            this._socket.close(code, reason);
        }
        else {
            this._state = NetNodeState.Closed;
        }
    }
    closeSocket(code, reason) {
        if (this._socket) {
            this._socket.close(code, reason);
        }
    }
    isAutoReconnect() {
        return this._autoReconnect != 0;
    }
    rejectReconnect() {
        this._autoReconnect = 0;
        this.clearTimer();
    }
    initSocket() {
        if (this._socket) {
            this._socket.onConnected = (event) => {
                this.onConnected(event);
            };
            this._socket.onMessage = (msg) => {
                this.onMessage(msg);
            };
            this._socket.onError = (event) => {
                this.onError(event);
            };
            this._socket.onClosed = (event) => {
                this.onClosed(event);
            };
            this._isSocketInit = true;
        }
    }
    onConnected(_event) {
        Logger_1.Logger.logNet('网络已连接');
        this._isSocketOpen = true;
        if (this._connectedCallback !== null) {
            this._state = NetNodeState.Checking;
            this._connectedCallback(() => {
                this.onChecked();
            });
        }
        else {
            this.onChecked();
        }
        Logger_1.Logger.logNet(`网络已连接当前状态为【${NetNodeStateStrs[this._state]}】`);
    }
    onChecked() {
        Logger_1.Logger.logNet('连接验证成功，进入工作状态');
        this._state = NetNodeState.Working;
        const requests = this._requests.concat();
        if (requests.length > 0) {
            Logger_1.Logger.logNet(`请求【${this._requests.length}】个待发送的信息`);
            for (let i = 0; i < requests.length;) {
                const req = requests[i];
                this._socket.send(req.buffer);
                if (req.callback == null || req.cmd != 0) {
                    requests.splice(i, 1);
                }
                else {
                    ++i;
                }
            }
            this.updateNetTips(NetTipsType.Requesting, this._requests.length > 0);
        }
        this.updateNetTips(NetTipsType.Connecting, false);
        this.resetHearbeatTimer();
        this.resetReceiveMsgTimer();
    }
    /** 接收到 WebSocket 数据（可能含多个 Outer 包） */
    onMessage(msg) {
        const frames = this._protocolHelper.decodeFrames(msg);
        if (frames.length === 0) {
            return;
        }
        this.resetReceiveMsgTimer();
        this.resetHearbeatTimer();
        for (const iresp of frames) {
            this.dispatchResponse(iresp);
        }
    }
    dispatchResponse(iresp) {
        const id = iresp.id;
        const cmd = iresp.cmd;
        Logger_1.Logger.logNet(`接受到命令【${cmd}】rpcId=${id}`);
        if (id !== 0 && this._requests.length > 0) {
            for (let reqIdx = 0; reqIdx < this._requests.length; reqIdx++) {
                const ireqp = this._requests[reqIdx];
                if (ireqp.id == id) {
                    Logger_1.Logger.logNet(`触发请求命令【${cmd}】的回调`);
                    this._protocolHelper.decodeCustom(ireqp, iresp);
                    if (ireqp.callback) {
                        this._callbackExecuter(ireqp.callback, iresp);
                    }
                    this._requests.splice(reqIdx, 1);
                    break;
                }
            }
            if (this._requests.length == 0) {
                this.updateNetTips(NetTipsType.Requesting, false);
            }
        }
        const listeners = this._listener[cmd];
        if (listeners != null) {
            for (const ireqp of listeners) {
                Logger_1.Logger.logNet(`触发监听命令【${cmd}】的回调`);
                this._protocolHelper.decodeCustom(ireqp, iresp);
                if (ireqp.callback) {
                    this._callbackExecuter(ireqp.callback, iresp.data);
                }
            }
        }
    }
    onError(event) {
        Logger_1.Logger.error('socket error', event);
    }
    onClosed(_event) {
        this._state = NetNodeState.Closed;
        this.clearTimer();
        this.updateNetTips(NetTipsType.Disconnecting, true);
        if (this._disconnectCallback && !this._disconnectCallback()) {
            Logger_1.Logger.logNet('断开连接');
            return;
        }
        if (this.isAutoReconnect()) {
            this.updateNetTips(NetTipsType.ReConnecting, true);
            this._reconnectTimer = setTimeout(() => {
                this.connect(this._connectOptions);
                if (this._autoReconnect > 0) {
                    this._autoReconnect -= 1;
                }
            }, this._reconnetTimeOut);
        }
    }
    request(reqProtocol, showTips = true, force = false) {
        this._protocolHelper.encode(reqProtocol);
        this.base_request(reqProtocol, showTips, force);
    }
    requestUnique(reqProtocol, showTips = true, force = false) {
        this._protocolHelper.encode(reqProtocol);
        for (let i = 0; i < this._requests.length; ++i) {
            if (this._requests[i].cmd == reqProtocol.cmd) {
                Logger_1.Logger.logNet(`命令【${reqProtocol.cmd}】重复请求`);
                return false;
            }
        }
        this.base_request(reqProtocol, showTips, force);
        return true;
    }
    /** 发送不期待响应的 Outer 消息（rpcId=0） */
    sendNotify(cmd, buffer) {
        if (this._state == NetNodeState.Working) {
            this._socket.send(buffer);
        }
    }
    base_request(reqProtocol, showTips = true, force = false) {
        if (this._state == NetNodeState.Working || force) {
            this._socket.send(reqProtocol.buffer);
        }
        Logger_1.Logger.logNet(`队列命令为【${reqProtocol.cmd}】的请求，等待请求数据的回调`);
        if (reqProtocol.callback) {
            this._requests.push(reqProtocol);
            if (showTips) {
                this.updateNetTips(NetTipsType.Requesting, true);
            }
        }
    }
    addResponeHandler(reqProtocol) {
        const cmd = reqProtocol.cmd;
        if (null == this._listener[cmd]) {
            this._listener[cmd] = [reqProtocol];
        }
        else {
            const index = this.getNetListenersIndex(cmd, reqProtocol.callback);
            if (-1 == index) {
                this._listener[cmd].push(reqProtocol);
            }
        }
    }
    removeResponeHandler(cmd, callback, target) {
        if (null != this._listener[cmd] && callback != null) {
            const index = this.getNetListenersIndex(cmd, { target, callback });
            if (-1 != index) {
                this._listener[cmd].splice(index, 1);
            }
        }
    }
    cleanListeners(cmd = 0) {
        if (cmd == 0) {
            this._listener = {};
        }
        else {
            delete this._listener[cmd];
        }
    }
    getNetListenersIndex(cmd, rspObject) {
        let index = -1;
        for (let i = 0; i < this._listener[cmd].length; i++) {
            const iterator = this._listener[cmd][i];
            if (iterator.callback &&
                iterator.callback.callback == rspObject.callback &&
                iterator.callback.target == rspObject.target) {
                index = i;
                break;
            }
        }
        return index;
    }
    resetReceiveMsgTimer() {
        if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
        }
        this._receiveMsgTimer = setTimeout(() => {
            Logger_1.Logger.logNet('接收消息定时器关闭网络连接');
            this._socket.close();
        }, this._receiveTime);
    }
    resetHearbeatTimer() {
        if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
        }
        this._keepAliveTimer = setTimeout(() => {
            Logger_1.Logger.logNet('网络节点发送心跳信息');
            if (this._state == NetNodeState.Working) {
                const hb = this._protocolHelper.buildHeartbeat();
                if (hb) {
                    this._socket.send(hb);
                }
                else {
                    this._protocolHelper.onHearbeat();
                }
            }
        }, this._heartTime);
    }
    clearTimer() {
        if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
            this._receiveMsgTimer = null;
        }
        if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
            this._keepAliveTimer = null;
        }
        if (this._reconnectTimer !== null) {
            clearTimeout(this._reconnectTimer);
            this._reconnectTimer = null;
        }
    }
}
exports.NetNode = NetNode;
//# sourceMappingURL=NetNode.js.map