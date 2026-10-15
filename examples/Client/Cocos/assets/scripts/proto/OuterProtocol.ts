/* eslint-disable */
// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。

import { OuterOpcode } from './OuterOpcode';
import type { OuterPushDef, OuterRpcDef, OuterSendDef } from 'db://fantasy-cocos/net/ProtocolMeta';
import type * as OuterPb from './pb/outer_pb';
import type { Fantasy } from './pb/outer_pb';

export type { OuterPushDef, OuterRpcDef, OuterSendDef };

/** 无 package → 根 I*；有 package → Fantasy.Network.Message.I* */
type RootIface<N extends string> = `I${N}` extends keyof OuterPb ? OuterPb[`I${N}` & keyof OuterPb] : never;
type NestedIface<N extends string> = `I${N}` extends keyof Fantasy.Network.Message ? Fantasy.Network.Message[`I${N}` & keyof Fantasy.Network.Message] : never;
export type OuterPbMsg<N extends string> = [RootIface<N>] extends [never] ? ([NestedIface<N>] extends [never] ? Record<string, unknown> : NestedIface<N>) : RootIface<N>;

/** 具名消息类型 = pbjs I* 接口（可传 { Tag, Data } 字面量） */
export type C2Chat_TestMessage = Fantasy.Network.Message.IC2Chat_TestMessage;
export type C2Chat_TestMessageRequest = Fantasy.Network.Message.IC2Chat_TestMessageRequest;
export type C2Chat_TestRPCRoamingRequest = Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest;
export type C2Chat_TestRequestPushMessage = Fantasy.Network.Message.IC2Chat_TestRequestPushMessage;
export type C2Chat_TestRoamingMessage = Fantasy.Network.Message.IC2Chat_TestRoamingMessage;
export type C2Chat_TestSendMapMessage = Fantasy.Network.Message.IC2Chat_TestSendMapMessage;
export type C2G_ConnectRoamingRequest = Fantasy.Network.Message.IC2G_ConnectRoamingRequest;
export type C2G_CreateAddressableRequest = Fantasy.Network.Message.IC2G_CreateAddressableRequest;
export type C2G_CreateChatRouteRequest = Fantasy.Network.Message.IC2G_CreateChatRouteRequest;
export type C2G_CreateSubSceneAddressableRequest = Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest;
export type C2G_CreateSubSceneRequest = Fantasy.Network.Message.IC2G_CreateSubSceneRequest;
export type C2G_LoginGameRequest = OuterPbMsg<'C2G_LoginGameRequest'>;
export type C2G_LoginRoamingRequest = Fantasy.Network.Message.IC2G_LoginRoamingRequest;
export type C2G_MapUnsubscribeSphereEventRequest = Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest;
export type C2G_PublishSphereEventRequest = Fantasy.Network.Message.IC2G_PublishSphereEventRequest;
export type C2G_SendAddressableToMap = Fantasy.Network.Message.IC2G_SendAddressableToMap;
export type C2G_SendToSubSceneMessage = Fantasy.Network.Message.IC2G_SendToSubSceneMessage;
export type C2G_SubscribeSphereEventRequest = Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest;
export type C2G_TestEmptyMessage = Fantasy.Network.Message.IC2G_TestEmptyMessage;
export type C2G_TestEnumMessage = Fantasy.Network.Message.IC2G_TestEnumMessage;
export type C2G_TestMemoryPackRequest = Fantasy.Network.Message.IC2G_TestMemoryPackRequest;
export type C2G_TestMessage = Fantasy.Network.Message.IC2G_TestMessage;
export type C2G_TestRequest = Fantasy.Network.Message.IC2G_TestRequest;
export type C2G_TestRequestPushMessage = Fantasy.Network.Message.IC2G_TestRequestPushMessage;
export type C2G_TestRoamingToRoaming = Fantasy.Network.Message.IC2G_TestRoamingToRoaming;
export type C2G_TestRouteToRoaming = Fantasy.Network.Message.IC2G_TestRouteToRoaming;
export type C2G_UnsubscribeSphereEventRequest = Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest;
export type C2M_InitComplete = OuterPbMsg<'C2M_InitComplete'>;
export type C2M_MoveRequest = OuterPbMsg<'C2M_MoveRequest'>;
export type C2M_MoveToMapRequest = Fantasy.Network.Message.IC2M_MoveToMapRequest;
export type C2M_TestMessage = Fantasy.Network.Message.IC2M_TestMessage;
export type C2M_TestRequest = Fantasy.Network.Message.IC2M_TestRequest;
export type C2Map_PushMessageToClient = Fantasy.Network.Message.IC2Map_PushMessageToClient;
export type C2Map_TestRoamingMessage = Fantasy.Network.Message.IC2Map_TestRoamingMessage;
export type C2Map_TestTransferRequest = Fantasy.Network.Message.IC2Map_TestTransferRequest;
export type C2SubScene_TestDisposeMessage = Fantasy.Network.Message.IC2SubScene_TestDisposeMessage;
export type C2SubScene_TestMessage = Fantasy.Network.Message.IC2SubScene_TestMessage;
export type Chat2C_PushMessage = Fantasy.Network.Message.IChat2C_PushMessage;
export type Chat2C_TestMessageResponse = Fantasy.Network.Message.IChat2C_TestMessageResponse;
export type Chat2C_TestRPCRoamingResponse = Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse;
export type G2C_ConnectRoamingResponse = Fantasy.Network.Message.IG2C_ConnectRoamingResponse;
export type G2C_CreateAddressableResponse = Fantasy.Network.Message.IG2C_CreateAddressableResponse;
export type G2C_CreateChatRouteResponse = Fantasy.Network.Message.IG2C_CreateChatRouteResponse;
export type G2C_CreateSubSceneAddressableResponse = Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse;
export type G2C_CreateSubSceneResponse = Fantasy.Network.Message.IG2C_CreateSubSceneResponse;
export type G2C_LoginGameResponse = OuterPbMsg<'G2C_LoginGameResponse'>;
export type G2C_LoginRoamingResponse = Fantasy.Network.Message.IG2C_LoginRoamingResponse;
export type G2C_MapUnsubscribeSphereEventResponse = Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse;
export type G2C_PublishSphereEventResponse = Fantasy.Network.Message.IG2C_PublishSphereEventResponse;
export type G2C_PushMessage = Fantasy.Network.Message.IG2C_PushMessage;
export type G2C_SubscribeSphereEventResponse = Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse;
export type G2C_TestMemoryPackResponse = Fantasy.Network.Message.IG2C_TestMemoryPackResponse;
export type G2C_TestResponse = Fantasy.Network.Message.IG2C_TestResponse;
export type G2C_UnsubscribeSphereEventResponse = Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse;
export type M2C_MoveResponse = OuterPbMsg<'M2C_MoveResponse'>;
export type M2C_MoveToMapResponse = Fantasy.Network.Message.IM2C_MoveToMapResponse;
export type M2C_TestResponse = Fantasy.Network.Message.IM2C_TestResponse;
export type M2C_UnitCreate = OuterPbMsg<'M2C_UnitCreate'>;
export type M2C_UnitLeave = OuterPbMsg<'M2C_UnitLeave'>;
export type M2C_UnitMoveState = OuterPbMsg<'M2C_UnitMoveState'>;
export type Map2C_PushMessageToClient = Fantasy.Network.Message.IMap2C_PushMessageToClient;
export type Map2C_TestTransferResponse = Fantasy.Network.Message.IMap2C_TestTransferResponse;

function rpcDef<TResp, TReq = Record<string, unknown>>(
  opcode: number,
  reqName: string,
  respName: string
): OuterRpcDef<TResp, TReq> {
  return { opcode, reqName, respName, __resp: undefined as TResp, __req: undefined as TReq };
}

function sendDef<TReq = Record<string, unknown>>(opcode: number, reqName: string): OuterSendDef<TReq> {
  return { opcode, reqName, __req: undefined as TReq };
}

function pushDef<TData = unknown>(opcode: number, typeName: string): OuterPushDef<TData> {
  return { opcode, typeName, __data: undefined as TData };
}

/** send(def, params) 使用 */
export const OuterSend = {
  C2Chat_TestMessage: sendDef<C2Chat_TestMessage>(OuterOpcode.C2Chat_TestMessage, 'C2Chat_TestMessage'),
  C2Chat_TestRequestPushMessage: sendDef<C2Chat_TestRequestPushMessage>(OuterOpcode.C2Chat_TestRequestPushMessage, 'C2Chat_TestRequestPushMessage'),
  C2Chat_TestRoamingMessage: sendDef<C2Chat_TestRoamingMessage>(OuterOpcode.C2Chat_TestRoamingMessage, 'C2Chat_TestRoamingMessage'),
  C2Chat_TestSendMapMessage: sendDef<C2Chat_TestSendMapMessage>(OuterOpcode.C2Chat_TestSendMapMessage, 'C2Chat_TestSendMapMessage'),
  C2G_SendAddressableToMap: sendDef<C2G_SendAddressableToMap>(OuterOpcode.C2G_SendAddressableToMap, 'C2G_SendAddressableToMap'),
  C2G_SendToSubSceneMessage: sendDef<C2G_SendToSubSceneMessage>(OuterOpcode.C2G_SendToSubSceneMessage, 'C2G_SendToSubSceneMessage'),
  C2G_TestEmptyMessage: sendDef<C2G_TestEmptyMessage>(OuterOpcode.C2G_TestEmptyMessage, 'C2G_TestEmptyMessage'),
  C2G_TestEnumMessage: sendDef<C2G_TestEnumMessage>(OuterOpcode.C2G_TestEnumMessage, 'C2G_TestEnumMessage'),
  C2G_TestMessage: sendDef<C2G_TestMessage>(OuterOpcode.C2G_TestMessage, 'C2G_TestMessage'),
  C2G_TestRequestPushMessage: sendDef<C2G_TestRequestPushMessage>(OuterOpcode.C2G_TestRequestPushMessage, 'C2G_TestRequestPushMessage'),
  C2G_TestRoamingToRoaming: sendDef<C2G_TestRoamingToRoaming>(OuterOpcode.C2G_TestRoamingToRoaming, 'C2G_TestRoamingToRoaming'),
  C2G_TestRouteToRoaming: sendDef<C2G_TestRouteToRoaming>(OuterOpcode.C2G_TestRouteToRoaming, 'C2G_TestRouteToRoaming'),
  C2M_InitComplete: sendDef<C2M_InitComplete>(OuterOpcode.C2M_InitComplete, 'C2M_InitComplete'),
  C2M_TestMessage: sendDef<C2M_TestMessage>(OuterOpcode.C2M_TestMessage, 'C2M_TestMessage'),
  C2Map_PushMessageToClient: sendDef<C2Map_PushMessageToClient>(OuterOpcode.C2Map_PushMessageToClient, 'C2Map_PushMessageToClient'),
  C2Map_TestRoamingMessage: sendDef<C2Map_TestRoamingMessage>(OuterOpcode.C2Map_TestRoamingMessage, 'C2Map_TestRoamingMessage'),
  C2SubScene_TestDisposeMessage: sendDef<C2SubScene_TestDisposeMessage>(OuterOpcode.C2SubScene_TestDisposeMessage, 'C2SubScene_TestDisposeMessage'),
  C2SubScene_TestMessage: sendDef<C2SubScene_TestMessage>(OuterOpcode.C2SubScene_TestMessage, 'C2SubScene_TestMessage')
};

export type OuterSendKey = keyof typeof OuterSend;

/** call(def, params) → WebSocketReturn<G2C_...>，无需手写泛型 */
export const OuterRpc = {
  C2Chat_TestMessageRequest: rpcDef<Chat2C_TestMessageResponse, C2Chat_TestMessageRequest>(OuterOpcode.C2Chat_TestMessageRequest, 'C2Chat_TestMessageRequest', 'Chat2C_TestMessageResponse'),
  C2Chat_TestRPCRoamingRequest: rpcDef<Chat2C_TestRPCRoamingResponse, C2Chat_TestRPCRoamingRequest>(OuterOpcode.C2Chat_TestRPCRoamingRequest, 'C2Chat_TestRPCRoamingRequest', 'Chat2C_TestRPCRoamingResponse'),
  C2G_ConnectRoamingRequest: rpcDef<G2C_ConnectRoamingResponse, C2G_ConnectRoamingRequest>(OuterOpcode.C2G_ConnectRoamingRequest, 'C2G_ConnectRoamingRequest', 'G2C_ConnectRoamingResponse'),
  C2G_CreateAddressableRequest: rpcDef<G2C_CreateAddressableResponse, C2G_CreateAddressableRequest>(OuterOpcode.C2G_CreateAddressableRequest, 'C2G_CreateAddressableRequest', 'G2C_CreateAddressableResponse'),
  C2G_CreateChatRouteRequest: rpcDef<G2C_CreateChatRouteResponse, C2G_CreateChatRouteRequest>(OuterOpcode.C2G_CreateChatRouteRequest, 'C2G_CreateChatRouteRequest', 'G2C_CreateChatRouteResponse'),
  C2G_CreateSubSceneAddressableRequest: rpcDef<G2C_CreateSubSceneAddressableResponse, C2G_CreateSubSceneAddressableRequest>(OuterOpcode.C2G_CreateSubSceneAddressableRequest, 'C2G_CreateSubSceneAddressableRequest', 'G2C_CreateSubSceneAddressableResponse'),
  C2G_CreateSubSceneRequest: rpcDef<G2C_CreateSubSceneResponse, C2G_CreateSubSceneRequest>(OuterOpcode.C2G_CreateSubSceneRequest, 'C2G_CreateSubSceneRequest', 'G2C_CreateSubSceneResponse'),
  C2G_LoginGameRequest: rpcDef<G2C_LoginGameResponse, C2G_LoginGameRequest>(OuterOpcode.C2G_LoginGameRequest, 'C2G_LoginGameRequest', 'G2C_LoginGameResponse'),
  C2G_LoginRoamingRequest: rpcDef<G2C_ConnectRoamingResponse, C2G_LoginRoamingRequest>(OuterOpcode.C2G_LoginRoamingRequest, 'C2G_LoginRoamingRequest', 'G2C_ConnectRoamingResponse'),
  C2G_MapUnsubscribeSphereEventRequest: rpcDef<G2C_MapUnsubscribeSphereEventResponse, C2G_MapUnsubscribeSphereEventRequest>(OuterOpcode.C2G_MapUnsubscribeSphereEventRequest, 'C2G_MapUnsubscribeSphereEventRequest', 'G2C_MapUnsubscribeSphereEventResponse'),
  C2G_PublishSphereEventRequest: rpcDef<G2C_PublishSphereEventResponse, C2G_PublishSphereEventRequest>(OuterOpcode.C2G_PublishSphereEventRequest, 'C2G_PublishSphereEventRequest', 'G2C_PublishSphereEventResponse'),
  C2G_SubscribeSphereEventRequest: rpcDef<G2C_SubscribeSphereEventResponse, C2G_SubscribeSphereEventRequest>(OuterOpcode.C2G_SubscribeSphereEventRequest, 'C2G_SubscribeSphereEventRequest', 'G2C_SubscribeSphereEventResponse'),
  C2G_TestMemoryPackRequest: rpcDef<G2C_TestMemoryPackResponse, C2G_TestMemoryPackRequest>(OuterOpcode.C2G_TestMemoryPackRequest, 'C2G_TestMemoryPackRequest', 'G2C_TestMemoryPackResponse'),
  C2G_TestRequest: rpcDef<G2C_TestResponse, C2G_TestRequest>(OuterOpcode.C2G_TestRequest, 'C2G_TestRequest', 'G2C_TestResponse'),
  C2G_UnsubscribeSphereEventRequest: rpcDef<G2C_UnsubscribeSphereEventResponse, C2G_UnsubscribeSphereEventRequest>(OuterOpcode.C2G_UnsubscribeSphereEventRequest, 'C2G_UnsubscribeSphereEventRequest', 'G2C_UnsubscribeSphereEventResponse'),
  C2M_MoveRequest: rpcDef<M2C_MoveResponse, C2M_MoveRequest>(OuterOpcode.C2M_MoveRequest, 'C2M_MoveRequest', 'M2C_MoveResponse'),
  C2M_MoveToMapRequest: rpcDef<M2C_MoveToMapResponse, C2M_MoveToMapRequest>(OuterOpcode.C2M_MoveToMapRequest, 'C2M_MoveToMapRequest', 'M2C_MoveToMapResponse'),
  C2M_TestRequest: rpcDef<M2C_TestResponse, C2M_TestRequest>(OuterOpcode.C2M_TestRequest, 'C2M_TestRequest', 'M2C_TestResponse'),
  C2Map_TestTransferRequest: rpcDef<Map2C_TestTransferResponse, C2Map_TestTransferRequest>(OuterOpcode.C2Map_TestTransferRequest, 'C2Map_TestTransferRequest', 'Map2C_TestTransferResponse')
};

export type OuterRpcKey = keyof typeof OuterRpc;

/** on(def, callback) 使用 */
export const OuterPush = {
  Chat2C_PushMessage: pushDef<Chat2C_PushMessage>(OuterOpcode.Chat2C_PushMessage, 'Chat2C_PushMessage'),
  Chat2C_TestMessageResponse: pushDef<Chat2C_TestMessageResponse>(OuterOpcode.Chat2C_TestMessageResponse, 'Chat2C_TestMessageResponse'),
  Chat2C_TestRPCRoamingResponse: pushDef<Chat2C_TestRPCRoamingResponse>(OuterOpcode.Chat2C_TestRPCRoamingResponse, 'Chat2C_TestRPCRoamingResponse'),
  G2C_ConnectRoamingResponse: pushDef<G2C_ConnectRoamingResponse>(OuterOpcode.G2C_ConnectRoamingResponse, 'G2C_ConnectRoamingResponse'),
  G2C_CreateAddressableResponse: pushDef<G2C_CreateAddressableResponse>(OuterOpcode.G2C_CreateAddressableResponse, 'G2C_CreateAddressableResponse'),
  G2C_CreateChatRouteResponse: pushDef<G2C_CreateChatRouteResponse>(OuterOpcode.G2C_CreateChatRouteResponse, 'G2C_CreateChatRouteResponse'),
  G2C_CreateSubSceneAddressableResponse: pushDef<G2C_CreateSubSceneAddressableResponse>(OuterOpcode.G2C_CreateSubSceneAddressableResponse, 'G2C_CreateSubSceneAddressableResponse'),
  G2C_CreateSubSceneResponse: pushDef<G2C_CreateSubSceneResponse>(OuterOpcode.G2C_CreateSubSceneResponse, 'G2C_CreateSubSceneResponse'),
  G2C_LoginGameResponse: pushDef<G2C_LoginGameResponse>(OuterOpcode.G2C_LoginGameResponse, 'G2C_LoginGameResponse'),
  G2C_LoginRoamingResponse: pushDef<G2C_LoginRoamingResponse>(OuterOpcode.G2C_LoginRoamingResponse, 'G2C_LoginRoamingResponse'),
  G2C_MapUnsubscribeSphereEventResponse: pushDef<G2C_MapUnsubscribeSphereEventResponse>(OuterOpcode.G2C_MapUnsubscribeSphereEventResponse, 'G2C_MapUnsubscribeSphereEventResponse'),
  G2C_PublishSphereEventResponse: pushDef<G2C_PublishSphereEventResponse>(OuterOpcode.G2C_PublishSphereEventResponse, 'G2C_PublishSphereEventResponse'),
  G2C_PushMessage: pushDef<G2C_PushMessage>(OuterOpcode.G2C_PushMessage, 'G2C_PushMessage'),
  G2C_SubscribeSphereEventResponse: pushDef<G2C_SubscribeSphereEventResponse>(OuterOpcode.G2C_SubscribeSphereEventResponse, 'G2C_SubscribeSphereEventResponse'),
  G2C_TestMemoryPackResponse: pushDef<G2C_TestMemoryPackResponse>(OuterOpcode.G2C_TestMemoryPackResponse, 'G2C_TestMemoryPackResponse'),
  G2C_TestResponse: pushDef<G2C_TestResponse>(OuterOpcode.G2C_TestResponse, 'G2C_TestResponse'),
  G2C_UnsubscribeSphereEventResponse: pushDef<G2C_UnsubscribeSphereEventResponse>(OuterOpcode.G2C_UnsubscribeSphereEventResponse, 'G2C_UnsubscribeSphereEventResponse'),
  M2C_MoveResponse: pushDef<M2C_MoveResponse>(OuterOpcode.M2C_MoveResponse, 'M2C_MoveResponse'),
  M2C_MoveToMapResponse: pushDef<M2C_MoveToMapResponse>(OuterOpcode.M2C_MoveToMapResponse, 'M2C_MoveToMapResponse'),
  M2C_TestResponse: pushDef<M2C_TestResponse>(OuterOpcode.M2C_TestResponse, 'M2C_TestResponse'),
  M2C_UnitCreate: pushDef<M2C_UnitCreate>(OuterOpcode.M2C_UnitCreate, 'M2C_UnitCreate'),
  M2C_UnitLeave: pushDef<M2C_UnitLeave>(OuterOpcode.M2C_UnitLeave, 'M2C_UnitLeave'),
  M2C_UnitMoveState: pushDef<M2C_UnitMoveState>(OuterOpcode.M2C_UnitMoveState, 'M2C_UnitMoveState'),
  Map2C_PushMessageToClient: pushDef<Map2C_PushMessageToClient>(OuterOpcode.Map2C_PushMessageToClient, 'Map2C_PushMessageToClient'),
  Map2C_TestTransferResponse: pushDef<Map2C_TestTransferResponse>(OuterOpcode.Map2C_TestTransferResponse, 'Map2C_TestTransferResponse')
};

export type OuterPushKey = keyof typeof OuterPush;

