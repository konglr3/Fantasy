/* eslint-disable */
// 由 npm run build:proto 生成，请勿手改。
import protobuf from 'protobufjs';
// CJS module.exports → ESM default（Creator / allowSyntheticDefaultImports）
import outerPb from './outer_pb.js';

/** pbjs -r FantasyOuter 注册名 */
export const OUTER_PB_ROOT_NAME = 'FantasyOuter';

/** 静态命名空间（非反射 Root；ProtoOuterDispatcher 已兼容） */
export function getOuterProtoRoot(): Record<string, unknown> {
  const fromRoots = (protobuf.roots as Record<string, Record<string, unknown> | undefined>)[
    OUTER_PB_ROOT_NAME
  ];
  if (fromRoots) {
    return fromRoots;
  }
  if (outerPb && typeof outerPb === 'object') {
    return outerPb as Record<string, unknown>;
  }
  throw new Error(
    '[outer_pb] protobuf.roots.FantasyOuter missing；请确认 outer_pb.js 已加载'
  );
}

export default getOuterProtoRoot;
