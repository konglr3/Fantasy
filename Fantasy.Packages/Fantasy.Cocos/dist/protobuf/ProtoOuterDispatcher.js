export class ProtoOuterDispatcher {
    constructor(root) {
        this.root = root;
        this.types = new Map();
        this.onDecoded = null;
        this.onUnknownOpcode = null;
        this.onDecodeError = null;
    }
    register(opcode, fullTypeName) {
        const t = this.root.lookupType(fullTypeName);
        if (!t) {
            throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
        }
        this.types.set(opcode >>> 0, t);
        return this;
    }
    encodeBody(fullTypeName, plain) {
        const t = this.root.lookupType(fullTypeName);
        if (!t) {
            throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
        }
        const err = t.verify(plain);
        if (err) {
            throw new Error(`[ProtoOuterDispatcher] verify failed: ${err}`);
        }
        const msg = t.create(plain);
        return t.encode(msg).finish();
    }
    /** 按类型名解码 body（RPC 响应 / 推送） */
    decodeBody(fullTypeName, body) {
        const t = this.root.lookupType(fullTypeName);
        if (!t) {
            throw new Error(`[ProtoOuterDispatcher] lookupType failed: ${fullTypeName}`);
        }
        return t.decode(body);
    }
    /** 按已注册 opcode 解码；未注册返回 null */
    decodeByOpcode(protocolCode, body) {
        const t = this.types.get(protocolCode >>> 0);
        if (!t) {
            return null;
        }
        return { typeName: t.fullName, message: t.decode(body) };
    }
    encodeMessage(message) {
        const t = message.$type;
        if (!t) {
            throw new Error('[ProtoOuterDispatcher] message.$type is missing; use message created by protobufjs Root');
        }
        return t.encode(message).finish();
    }
    dispatch(packet) {
        const t = this.types.get(packet.protocolCode >>> 0);
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
                typeName: t.fullName
            });
        }
        catch (error) {
            this.onDecodeError?.({ packet, error });
        }
    }
}
export function attachProtoOuterDispatcher(session, dispatcher) {
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