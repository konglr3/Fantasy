/* eslint-disable */
// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。

import { OuterOpcode } from './OuterOpcode';

/** 仅依赖 register 能力，兼容 fantasy-cocos 的 src / dist / 已发布类型 */
export type OuterProtobufRegistrar = {
  register(opcode: number, fullTypeName: string): unknown;
};

export function registerOuterProtobufMessages(dispatcher: OuterProtobufRegistrar): void {
  dispatcher.register(OuterOpcode.C2G_SendAddressableToMap, 'C2G_SendAddressableToMap');
  dispatcher.register(OuterOpcode.C2G_SendToSubSceneMessage, 'C2G_SendToSubSceneMessage');
  dispatcher.register(OuterOpcode.C2G_TestEmptyMessage, 'C2G_TestEmptyMessage');
  dispatcher.register(OuterOpcode.C2G_TestEnumMessage, 'C2G_TestEnumMessage');
  dispatcher.register(OuterOpcode.C2G_TestMessage, 'C2G_TestMessage');
  dispatcher.register(OuterOpcode.C2G_TestRequestPushMessage, 'C2G_TestRequestPushMessage');
  dispatcher.register(OuterOpcode.C2G_TestRoamingToRoaming, 'C2G_TestRoamingToRoaming');
  dispatcher.register(OuterOpcode.C2G_TestRouteToRoaming, 'C2G_TestRouteToRoaming');
  dispatcher.register(OuterOpcode.G2C_PushMessage, 'G2C_PushMessage');
  dispatcher.register(OuterOpcode.C2G_ConnectRoamingRequest, 'C2G_ConnectRoamingRequest');
  dispatcher.register(OuterOpcode.C2G_CreateAddressableRequest, 'C2G_CreateAddressableRequest');
  dispatcher.register(OuterOpcode.C2G_CreateChatRouteRequest, 'C2G_CreateChatRouteRequest');
  dispatcher.register(OuterOpcode.C2G_CreateSubSceneAddressableRequest, 'C2G_CreateSubSceneAddressableRequest');
  dispatcher.register(OuterOpcode.C2G_CreateSubSceneRequest, 'C2G_CreateSubSceneRequest');
  dispatcher.register(OuterOpcode.C2G_LoginGameRequest, 'C2G_LoginGameRequest');
  dispatcher.register(OuterOpcode.C2G_LoginRoamingRequest, 'C2G_LoginRoamingRequest');
  dispatcher.register(OuterOpcode.C2G_MapUnsubscribeSphereEventRequest, 'C2G_MapUnsubscribeSphereEventRequest');
  dispatcher.register(OuterOpcode.C2G_PublishSphereEventRequest, 'C2G_PublishSphereEventRequest');
  dispatcher.register(OuterOpcode.C2G_SubscribeSphereEventRequest, 'C2G_SubscribeSphereEventRequest');
  dispatcher.register(OuterOpcode.C2G_TestRequest, 'C2G_TestRequest');
  dispatcher.register(OuterOpcode.C2G_UnsubscribeSphereEventRequest, 'C2G_UnsubscribeSphereEventRequest');
  dispatcher.register(OuterOpcode.G2C_ConnectRoamingResponse, 'G2C_ConnectRoamingResponse');
  dispatcher.register(OuterOpcode.G2C_CreateAddressableResponse, 'G2C_CreateAddressableResponse');
  dispatcher.register(OuterOpcode.G2C_CreateChatRouteResponse, 'G2C_CreateChatRouteResponse');
  dispatcher.register(OuterOpcode.G2C_CreateSubSceneAddressableResponse, 'G2C_CreateSubSceneAddressableResponse');
  dispatcher.register(OuterOpcode.G2C_CreateSubSceneResponse, 'G2C_CreateSubSceneResponse');
  dispatcher.register(OuterOpcode.G2C_LoginGameResponse, 'G2C_LoginGameResponse');
  dispatcher.register(OuterOpcode.G2C_LoginRoamingResponse, 'G2C_LoginRoamingResponse');
  dispatcher.register(OuterOpcode.G2C_MapUnsubscribeSphereEventResponse, 'G2C_MapUnsubscribeSphereEventResponse');
  dispatcher.register(OuterOpcode.G2C_PublishSphereEventResponse, 'G2C_PublishSphereEventResponse');
  dispatcher.register(OuterOpcode.G2C_SubscribeSphereEventResponse, 'G2C_SubscribeSphereEventResponse');
  dispatcher.register(OuterOpcode.G2C_TestResponse, 'G2C_TestResponse');
  dispatcher.register(OuterOpcode.G2C_UnsubscribeSphereEventResponse, 'G2C_UnsubscribeSphereEventResponse');
  dispatcher.register(OuterOpcode.C2M_TestMessage, 'C2M_TestMessage');
  dispatcher.register(OuterOpcode.C2SubScene_TestDisposeMessage, 'C2SubScene_TestDisposeMessage');
  dispatcher.register(OuterOpcode.C2SubScene_TestMessage, 'C2SubScene_TestMessage');
  dispatcher.register(OuterOpcode.C2M_MoveToMapRequest, 'C2M_MoveToMapRequest');
  dispatcher.register(OuterOpcode.C2M_TestRequest, 'C2M_TestRequest');
  dispatcher.register(OuterOpcode.M2C_MoveToMapResponse, 'M2C_MoveToMapResponse');
  dispatcher.register(OuterOpcode.M2C_TestResponse, 'M2C_TestResponse');
  dispatcher.register(OuterOpcode.C2Chat_TestMessage, 'C2Chat_TestMessage');
  dispatcher.register(OuterOpcode.C2Chat_TestRequestPushMessage, 'C2Chat_TestRequestPushMessage');
  dispatcher.register(OuterOpcode.Chat2C_PushMessage, 'Chat2C_PushMessage');
  dispatcher.register(OuterOpcode.C2Chat_TestMessageRequest, 'C2Chat_TestMessageRequest');
  dispatcher.register(OuterOpcode.Chat2C_TestMessageResponse, 'Chat2C_TestMessageResponse');
  dispatcher.register(OuterOpcode.C2Chat_TestRoamingMessage, 'C2Chat_TestRoamingMessage');
  dispatcher.register(OuterOpcode.C2Chat_TestSendMapMessage, 'C2Chat_TestSendMapMessage');
  dispatcher.register(OuterOpcode.C2M_InitComplete, 'C2M_InitComplete');
  dispatcher.register(OuterOpcode.C2Map_PushMessageToClient, 'C2Map_PushMessageToClient');
  dispatcher.register(OuterOpcode.C2Map_TestRoamingMessage, 'C2Map_TestRoamingMessage');
  dispatcher.register(OuterOpcode.M2C_UnitCreate, 'M2C_UnitCreate');
  dispatcher.register(OuterOpcode.M2C_UnitLeave, 'M2C_UnitLeave');
  dispatcher.register(OuterOpcode.M2C_UnitMoveState, 'M2C_UnitMoveState');
  dispatcher.register(OuterOpcode.Map2C_PushMessageToClient, 'Map2C_PushMessageToClient');
  dispatcher.register(OuterOpcode.C2Chat_TestRPCRoamingRequest, 'C2Chat_TestRPCRoamingRequest');
  dispatcher.register(OuterOpcode.C2M_MoveRequest, 'C2M_MoveRequest');
  dispatcher.register(OuterOpcode.C2Map_TestTransferRequest, 'C2Map_TestTransferRequest');
  dispatcher.register(OuterOpcode.Chat2C_TestRPCRoamingResponse, 'Chat2C_TestRPCRoamingResponse');
  dispatcher.register(OuterOpcode.M2C_MoveResponse, 'M2C_MoveResponse');
  dispatcher.register(OuterOpcode.Map2C_TestTransferResponse, 'Map2C_TestTransferResponse');
}
