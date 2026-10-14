/* eslint-disable */
// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。

import { OuterOpcode } from './OuterOpcode';

/** 单向消息绑定（IMessage / Route / Roaming Message） */
export type OuterSendDef = { readonly opcode: number; readonly reqName: string };

/** RPC 绑定（IRequest ↔ ResponseType） */
export type OuterRpcDef = { readonly opcode: number; readonly reqName: string; readonly respName: string };

/** 推送 / 响应消息绑定（按 opcode 监听） */
export type OuterPushDef = { readonly opcode: number; readonly typeName: string };

/** send(def, params) 使用 */
export const OuterSend = {
  C2Chat_TestMessage: { opcode: OuterOpcode.C2Chat_TestMessage, reqName: 'C2Chat_TestMessage' },
  C2Chat_TestRequestPushMessage: { opcode: OuterOpcode.C2Chat_TestRequestPushMessage, reqName: 'C2Chat_TestRequestPushMessage' },
  C2Chat_TestRoamingMessage: { opcode: OuterOpcode.C2Chat_TestRoamingMessage, reqName: 'C2Chat_TestRoamingMessage' },
  C2Chat_TestSendMapMessage: { opcode: OuterOpcode.C2Chat_TestSendMapMessage, reqName: 'C2Chat_TestSendMapMessage' },
  C2G_SendAddressableToMap: { opcode: OuterOpcode.C2G_SendAddressableToMap, reqName: 'C2G_SendAddressableToMap' },
  C2G_SendToSubSceneMessage: { opcode: OuterOpcode.C2G_SendToSubSceneMessage, reqName: 'C2G_SendToSubSceneMessage' },
  C2G_TestEmptyMessage: { opcode: OuterOpcode.C2G_TestEmptyMessage, reqName: 'C2G_TestEmptyMessage' },
  C2G_TestEnumMessage: { opcode: OuterOpcode.C2G_TestEnumMessage, reqName: 'C2G_TestEnumMessage' },
  C2G_TestMessage: { opcode: OuterOpcode.C2G_TestMessage, reqName: 'C2G_TestMessage' },
  C2G_TestRequestPushMessage: { opcode: OuterOpcode.C2G_TestRequestPushMessage, reqName: 'C2G_TestRequestPushMessage' },
  C2G_TestRoamingToRoaming: { opcode: OuterOpcode.C2G_TestRoamingToRoaming, reqName: 'C2G_TestRoamingToRoaming' },
  C2G_TestRouteToRoaming: { opcode: OuterOpcode.C2G_TestRouteToRoaming, reqName: 'C2G_TestRouteToRoaming' },
  C2M_InitComplete: { opcode: OuterOpcode.C2M_InitComplete, reqName: 'C2M_InitComplete' },
  C2M_TestMessage: { opcode: OuterOpcode.C2M_TestMessage, reqName: 'C2M_TestMessage' },
  C2Map_PushMessageToClient: { opcode: OuterOpcode.C2Map_PushMessageToClient, reqName: 'C2Map_PushMessageToClient' },
  C2Map_TestRoamingMessage: { opcode: OuterOpcode.C2Map_TestRoamingMessage, reqName: 'C2Map_TestRoamingMessage' },
  C2SubScene_TestDisposeMessage: { opcode: OuterOpcode.C2SubScene_TestDisposeMessage, reqName: 'C2SubScene_TestDisposeMessage' },
  C2SubScene_TestMessage: { opcode: OuterOpcode.C2SubScene_TestMessage, reqName: 'C2SubScene_TestMessage' }
} as const;

export type OuterSendKey = keyof typeof OuterSend;

/** callRpc(def, params) 使用：opcode / reqName / respName 已绑定 */
export const OuterRpc = {
  C2Chat_TestMessageRequest: { opcode: OuterOpcode.C2Chat_TestMessageRequest, reqName: 'C2Chat_TestMessageRequest', respName: 'Chat2C_TestMessageResponse' },
  C2Chat_TestRPCRoamingRequest: { opcode: OuterOpcode.C2Chat_TestRPCRoamingRequest, reqName: 'C2Chat_TestRPCRoamingRequest', respName: 'Chat2C_TestRPCRoamingResponse' },
  C2G_ConnectRoamingRequest: { opcode: OuterOpcode.C2G_ConnectRoamingRequest, reqName: 'C2G_ConnectRoamingRequest', respName: 'G2C_ConnectRoamingResponse' },
  C2G_CreateAddressableRequest: { opcode: OuterOpcode.C2G_CreateAddressableRequest, reqName: 'C2G_CreateAddressableRequest', respName: 'G2C_CreateAddressableResponse' },
  C2G_CreateChatRouteRequest: { opcode: OuterOpcode.C2G_CreateChatRouteRequest, reqName: 'C2G_CreateChatRouteRequest', respName: 'G2C_CreateChatRouteResponse' },
  C2G_CreateSubSceneAddressableRequest: { opcode: OuterOpcode.C2G_CreateSubSceneAddressableRequest, reqName: 'C2G_CreateSubSceneAddressableRequest', respName: 'G2C_CreateSubSceneAddressableResponse' },
  C2G_CreateSubSceneRequest: { opcode: OuterOpcode.C2G_CreateSubSceneRequest, reqName: 'C2G_CreateSubSceneRequest', respName: 'G2C_CreateSubSceneResponse' },
  C2G_LoginGameRequest: { opcode: OuterOpcode.C2G_LoginGameRequest, reqName: 'C2G_LoginGameRequest', respName: 'G2C_LoginGameResponse' },
  C2G_LoginRoamingRequest: { opcode: OuterOpcode.C2G_LoginRoamingRequest, reqName: 'C2G_LoginRoamingRequest', respName: 'G2C_ConnectRoamingResponse' },
  C2G_MapUnsubscribeSphereEventRequest: { opcode: OuterOpcode.C2G_MapUnsubscribeSphereEventRequest, reqName: 'C2G_MapUnsubscribeSphereEventRequest', respName: 'G2C_MapUnsubscribeSphereEventResponse' },
  C2G_PublishSphereEventRequest: { opcode: OuterOpcode.C2G_PublishSphereEventRequest, reqName: 'C2G_PublishSphereEventRequest', respName: 'G2C_PublishSphereEventResponse' },
  C2G_SubscribeSphereEventRequest: { opcode: OuterOpcode.C2G_SubscribeSphereEventRequest, reqName: 'C2G_SubscribeSphereEventRequest', respName: 'G2C_SubscribeSphereEventResponse' },
  C2G_TestMemoryPackRequest: { opcode: OuterOpcode.C2G_TestMemoryPackRequest, reqName: 'C2G_TestMemoryPackRequest', respName: 'G2C_TestMemoryPackResponse' },
  C2G_TestRequest: { opcode: OuterOpcode.C2G_TestRequest, reqName: 'C2G_TestRequest', respName: 'G2C_TestResponse' },
  C2G_UnsubscribeSphereEventRequest: { opcode: OuterOpcode.C2G_UnsubscribeSphereEventRequest, reqName: 'C2G_UnsubscribeSphereEventRequest', respName: 'G2C_UnsubscribeSphereEventResponse' },
  C2M_MoveRequest: { opcode: OuterOpcode.C2M_MoveRequest, reqName: 'C2M_MoveRequest', respName: 'M2C_MoveResponse' },
  C2M_MoveToMapRequest: { opcode: OuterOpcode.C2M_MoveToMapRequest, reqName: 'C2M_MoveToMapRequest', respName: 'M2C_MoveToMapResponse' },
  C2M_TestRequest: { opcode: OuterOpcode.C2M_TestRequest, reqName: 'C2M_TestRequest', respName: 'M2C_TestResponse' },
  C2Map_TestTransferRequest: { opcode: OuterOpcode.C2Map_TestTransferRequest, reqName: 'C2Map_TestTransferRequest', respName: 'Map2C_TestTransferResponse' }
} as const;

export type OuterRpcKey = keyof typeof OuterRpc;

/** on(def, callback) 使用 */
export const OuterPush = {
  Chat2C_PushMessage: { opcode: OuterOpcode.Chat2C_PushMessage, typeName: 'Chat2C_PushMessage' },
  Chat2C_TestMessageResponse: { opcode: OuterOpcode.Chat2C_TestMessageResponse, typeName: 'Chat2C_TestMessageResponse' },
  Chat2C_TestRPCRoamingResponse: { opcode: OuterOpcode.Chat2C_TestRPCRoamingResponse, typeName: 'Chat2C_TestRPCRoamingResponse' },
  G2C_ConnectRoamingResponse: { opcode: OuterOpcode.G2C_ConnectRoamingResponse, typeName: 'G2C_ConnectRoamingResponse' },
  G2C_CreateAddressableResponse: { opcode: OuterOpcode.G2C_CreateAddressableResponse, typeName: 'G2C_CreateAddressableResponse' },
  G2C_CreateChatRouteResponse: { opcode: OuterOpcode.G2C_CreateChatRouteResponse, typeName: 'G2C_CreateChatRouteResponse' },
  G2C_CreateSubSceneAddressableResponse: { opcode: OuterOpcode.G2C_CreateSubSceneAddressableResponse, typeName: 'G2C_CreateSubSceneAddressableResponse' },
  G2C_CreateSubSceneResponse: { opcode: OuterOpcode.G2C_CreateSubSceneResponse, typeName: 'G2C_CreateSubSceneResponse' },
  G2C_LoginGameResponse: { opcode: OuterOpcode.G2C_LoginGameResponse, typeName: 'G2C_LoginGameResponse' },
  G2C_LoginRoamingResponse: { opcode: OuterOpcode.G2C_LoginRoamingResponse, typeName: 'G2C_LoginRoamingResponse' },
  G2C_MapUnsubscribeSphereEventResponse: { opcode: OuterOpcode.G2C_MapUnsubscribeSphereEventResponse, typeName: 'G2C_MapUnsubscribeSphereEventResponse' },
  G2C_PublishSphereEventResponse: { opcode: OuterOpcode.G2C_PublishSphereEventResponse, typeName: 'G2C_PublishSphereEventResponse' },
  G2C_PushMessage: { opcode: OuterOpcode.G2C_PushMessage, typeName: 'G2C_PushMessage' },
  G2C_SubscribeSphereEventResponse: { opcode: OuterOpcode.G2C_SubscribeSphereEventResponse, typeName: 'G2C_SubscribeSphereEventResponse' },
  G2C_TestMemoryPackResponse: { opcode: OuterOpcode.G2C_TestMemoryPackResponse, typeName: 'G2C_TestMemoryPackResponse' },
  G2C_TestResponse: { opcode: OuterOpcode.G2C_TestResponse, typeName: 'G2C_TestResponse' },
  G2C_UnsubscribeSphereEventResponse: { opcode: OuterOpcode.G2C_UnsubscribeSphereEventResponse, typeName: 'G2C_UnsubscribeSphereEventResponse' },
  M2C_MoveResponse: { opcode: OuterOpcode.M2C_MoveResponse, typeName: 'M2C_MoveResponse' },
  M2C_MoveToMapResponse: { opcode: OuterOpcode.M2C_MoveToMapResponse, typeName: 'M2C_MoveToMapResponse' },
  M2C_TestResponse: { opcode: OuterOpcode.M2C_TestResponse, typeName: 'M2C_TestResponse' },
  M2C_UnitCreate: { opcode: OuterOpcode.M2C_UnitCreate, typeName: 'M2C_UnitCreate' },
  M2C_UnitLeave: { opcode: OuterOpcode.M2C_UnitLeave, typeName: 'M2C_UnitLeave' },
  M2C_UnitMoveState: { opcode: OuterOpcode.M2C_UnitMoveState, typeName: 'M2C_UnitMoveState' },
  Map2C_PushMessageToClient: { opcode: OuterOpcode.Map2C_PushMessageToClient, typeName: 'Map2C_PushMessageToClient' },
  Map2C_TestTransferResponse: { opcode: OuterOpcode.Map2C_TestTransferResponse, typeName: 'Map2C_TestTransferResponse' }
} as const;

export type OuterPushKey = keyof typeof OuterPush;

