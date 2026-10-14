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

export function isOuterRpcDef(value: unknown): value is OuterRpcDef {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as OuterRpcDef).opcode === 'number' &&
    typeof (value as OuterRpcDef).reqName === 'string' &&
    typeof (value as OuterRpcDef).respName === 'string'
  );
}

export function isOuterSendDef(value: unknown): value is OuterSendDef {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as OuterSendDef).opcode === 'number' &&
    typeof (value as OuterSendDef).reqName === 'string' &&
    !('respName' in (value as object))
  );
}

export function isOuterPushDef(value: unknown): value is OuterPushDef {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as OuterPushDef).opcode === 'number' &&
    typeof (value as OuterPushDef).typeName === 'string'
  );
}
