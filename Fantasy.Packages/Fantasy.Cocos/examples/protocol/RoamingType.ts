/* eslint-disable */
// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。

/** Roaming 协议常量（须 ≥10000，10000 以内为框架预留） */
export const RoamingType = {
  /** Map */
  MapRoamingType: 10001,
  /** Chat */
  ChatRoamingType: 10002
} as const;

export type RoamingTypeKey = keyof typeof RoamingType;

export const RoamingTypeValues: readonly number[] = [10001, 10002] as const;