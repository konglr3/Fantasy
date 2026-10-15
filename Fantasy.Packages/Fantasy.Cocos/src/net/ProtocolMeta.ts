/** 单向消息绑定（协议导出 OuterSend） */
export interface OuterSendDef<TReq = Record<string, unknown>> {
  readonly opcode: number;
  readonly reqName: string;
  /** 仅类型（运行时为 undefined） */
  readonly __req: TReq;
}

/**
 * RPC 绑定（协议导出 OuterRpc）
 * 用必选 phantom `__resp` / `__req` 携带泛型，保证 call() 能推断 TResp。
 */
export interface OuterRpcDef<TResp = unknown, TReq = Record<string, unknown>> {
  readonly opcode: number;
  readonly reqName: string;
  readonly respName: string;
  /** 仅类型（运行时为 undefined） */
  readonly __resp: TResp;
  /** 仅类型（运行时为 undefined） */
  readonly __req: TReq;
}

/** 推送 / 响应绑定（协议导出 OuterPush） */
export interface OuterPushDef<TData = unknown> {
  readonly opcode: number;
  readonly typeName: string;
  /** 仅类型（运行时为 undefined） */
  readonly __data: TData;
}

export function isOuterRpcDef(value: unknown): value is OuterRpcDef<any, any> {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as OuterRpcDef).opcode === 'number' &&
    typeof (value as OuterRpcDef).reqName === 'string' &&
    typeof (value as OuterRpcDef).respName === 'string'
  );
}

export function isOuterSendDef(value: unknown): value is OuterSendDef<any> {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as OuterSendDef).opcode === 'number' &&
    typeof (value as OuterSendDef).reqName === 'string' &&
    !('respName' in (value as object))
  );
}

export function isOuterPushDef(value: unknown): value is OuterPushDef<any> {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as OuterPushDef).opcode === 'number' &&
    typeof (value as OuterPushDef).typeName === 'string'
  );
}
