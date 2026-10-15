"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoOuterDispatcher = void 0;
exports.resolveProtoType = resolveProtoType;
exports.getStaticProtoRoot = getStaticProtoRoot;
exports.attachProtoOuterDispatcher = attachProtoOuterDispatcher;
const protobufjs_1 = __importDefault(require("protobufjs"));
function isReflectionRoot(root) {
    return typeof root.lookupType === 'function';
}
function typeDisplayName(t, fallback) {
    return t.fullName || t.name || fallback;
}
/**
 * 解析消息类型：兼容 protobufjs Root.lookupType，以及 static-module 命名空间
 *（短名如 C2G_TestMessage，或路径 Fantasy.Network.Message.C2G_TestMessage）。
 */
function resolveProtoType(root, fullTypeName) {
    const name = fullTypeName.replace(/^\./, '');
    if (isReflectionRoot(root)) {
        try {
            return root.lookupType(name);
        }
        catch {
            // fall through to static / short-name walk
        }
    }
    const ns = root;
    if (name.includes('.')) {
        let cur = ns;
        for (const part of name.split('.')) {
            if (cur == null || typeof cur !== 'object') {
                cur = undefined;
                break;
            }
            cur = cur[part];
        }
        if (cur && typeof cur.encode === 'function') {
            return cur;
        }
    }
    else {
        const direct = ns[name];
        if (direct && typeof direct.encode === 'function') {
            return direct;
        }
        const found = findStaticTypeByShortName(ns, name);
        if (found) {
            return found;
        }
    }
    throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
}
function findStaticTypeByShortName(ns, shortName, depth = 0) {
    if (depth > 8 || !ns || typeof ns !== 'object') {
        return null;
    }
    const direct = ns[shortName];
    if (direct && typeof direct.encode === 'function') {
        return direct;
    }
    for (const key of Object.keys(ns)) {
        const child = ns[key];
        if (!child || typeof child !== 'object') {
            continue;
        }
        // 静态消息构造函数自身带 encode，跳过；命名空间无 encode
        if (typeof child.encode === 'function') {
            continue;
        }
        const found = findStaticTypeByShortName(child, shortName, depth + 1);
        if (found) {
            return found;
        }
    }
    return null;
}
/** 从 pbjs `-r` 注册名取静态 Root（需先 import/require 静态模块） */
function getStaticProtoRoot(rootName) {
    const fromRoots = protobufjs_1.default.roots[rootName];
    if (!fromRoots) {
        throw new Error(`[ProtoOuterDispatcher] protobuf.roots["${rootName}"] 不存在。请先 import 静态 pb 模块（如 outer_pb.js）。`);
    }
    return fromRoots;
}
class ProtoOuterDispatcher {
    constructor(root) {
        this.root = root;
        this.types = new Map();
        this.typeNames = new Map();
        this.onDecoded = null;
        this.onUnknownOpcode = null;
        this.onDecodeError = null;
    }
    /** 使用静态模块 roots 名构造（默认 FantasyOuter，与 build:proto -r 一致） */
    static fromStaticRoot(rootName = 'FantasyOuter') {
        return new ProtoOuterDispatcher(getStaticProtoRoot(rootName));
    }
    register(opcode, fullTypeName) {
        const t = resolveProtoType(this.root, fullTypeName);
        const key = opcode >>> 0;
        this.types.set(key, t);
        this.typeNames.set(key, fullTypeName);
        return this;
    }
    encodeBody(fullTypeName, plain) {
        const t = resolveProtoType(this.root, fullTypeName);
        if (typeof t.verify === 'function') {
            const err = t.verify(plain);
            if (err) {
                throw new Error(`[ProtoOuterDispatcher] verify failed: ${err}`);
            }
        }
        // pbjs --no-create 时无 create；encode 可直接吃 plain object
        const msg = typeof t.create === 'function' ? t.create(plain) : plain;
        return t.encode(msg).finish();
    }
    /** 按类型名解码 body（RPC 响应 / 推送） */
    decodeBody(fullTypeName, body) {
        const t = resolveProtoType(this.root, fullTypeName);
        return t.decode(body);
    }
    /** 按已注册 opcode 解码；未注册返回 null */
    decodeByOpcode(protocolCode, body) {
        const key = protocolCode >>> 0;
        const t = this.types.get(key);
        if (!t) {
            return null;
        }
        const typeName = this.typeNames.get(key) ?? typeDisplayName(t, String(key));
        return { typeName, message: t.decode(body) };
    }
    encodeMessage(message) {
        const t = message.$type;
        if (!t) {
            throw new Error('[ProtoOuterDispatcher] message.$type is missing; use encodeBody(typeName, plain) for static modules');
        }
        return t.encode(message).finish();
    }
    dispatch(packet) {
        const key = packet.protocolCode >>> 0;
        const t = this.types.get(key);
        if (!t) {
            this.onUnknownOpcode?.(packet);
            return;
        }
        try {
            const message = t.decode(packet.body);
            this.onDecoded?.({
                protocolCode: packet.protocolCode,
                rpcId: packet.rpcId,
                address: packet.address,
                message,
                typeName: this.typeNames.get(key) ?? typeDisplayName(t, String(key))
            });
        }
        catch (error) {
            this.onDecodeError?.({ packet, error });
        }
    }
}
exports.ProtoOuterDispatcher = ProtoOuterDispatcher;
function attachProtoOuterDispatcher(session, dispatcher) {
    const prev = session.onOuterPacket;
    session.onOuterPacket = (packet) => {
        dispatcher.dispatch(packet);
        if (prev) {
            prev(packet);
        }
    };
    return () => {
        session.onOuterPacket = prev;
    };
}
//# sourceMappingURL=ProtoOuterDispatcher.js.map