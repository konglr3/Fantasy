/* eslint-disable */
// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。

/** Route 协议常量（须 ≥1000，1000 以内为框架预留） */
export const RouteType = {
  /** Gate */
  GateRoute: 1001,
  /** Chat */
  ChatRoute: 1002
} as const;

export type RouteTypeKey = keyof typeof RouteType;

/** 所有 Route 取值，便于遍历 */
export const RouteTypeValues: readonly number[] = [1001, 1002] as const;