/** 单向消息绑定（协议导出 OuterSend） */
export interface OuterSendDef {
    readonly opcode: number;
    readonly reqName: string;
}
/** RPC 绑定（协议导出 OuterRpc） */
export interface OuterRpcDef {
    readonly opcode: number;
    readonly reqName: string;
    readonly respName: string;
}
/** 推送 / 响应绑定（协议导出 OuterPush） */
export interface OuterPushDef {
    readonly opcode: number;
    readonly typeName: string;
}
export declare function isOuterRpcDef(value: unknown): value is OuterRpcDef;
export declare function isOuterSendDef(value: unknown): value is OuterSendDef;
export declare function isOuterPushDef(value: unknown): value is OuterPushDef;
//# sourceMappingURL=ProtocolMeta.d.ts.map