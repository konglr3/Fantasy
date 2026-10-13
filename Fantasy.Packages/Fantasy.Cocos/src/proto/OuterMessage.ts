/* eslint-disable */
// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。

/** 外网消息结构（与 C# OuterMessage 字段语义对齐） */
/**
 * 客户端登陆到Gate服务器
 * @Fantasy.interface IRequest
 * @response G2C_LoginGameResponse
 */
export interface C2G_LoginGameRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_LoginGameRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_LoginGameResponse';
  AccountName?: string;
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_LoginGameResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_LoginGameResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 客户端通知服务器可以接收服务器推送的消息
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface C2M_InitComplete {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2M_InitComplete */
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
}

/**
 * Map服务器通知客户端创建新的Unit
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface M2C_UnitCreate {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.M2C_UnitCreate */
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
  Unit?: UnitInfo;
  IsSelf: boolean;
}

/**
 * Map通知客户端有Unit离开
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface M2C_UnitLeave {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.M2C_UnitLeave */
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
  UnitId: bigint;
}

/**
 * Unit信息
 */
export interface UnitInfo {
  UnitId: bigint;
  Name?: string;
  Pos?: Position;
  UnitType: number;
}

/**
 * 客户端发送请求移动
 * @Fantasy.interface IRoamingRequest
 * @response M2C_MoveResponse
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface C2M_MoveRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2M_MoveRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'M2C_MoveResponse';
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
  TargetPos?: Position;
}

/**
 * @Fantasy.interface IRoamingResponse
 */
export interface M2C_MoveResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.M2C_MoveResponse */
  /** 框架响应错误码 */
  errorCode?: number;
  Data: readonly Position[];
}

/**
 * 坐标信息
 */
export interface Position {
  X: number;
  Y: number;
  Z: number;
}

/**
 * 通知客户端Unit移动状态改变
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface M2C_UnitMoveState {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.M2C_UnitMoveState */
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
  State: number;
  UnitId: bigint;
  Pos?: Position;
}

/**
 * @Fantasy.interface IMessage
 */
export interface C2G_TestEmptyMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestEmptyMessage */
}

/**
 * @Fantasy.interface IMessage
 */
export interface C2G_TestMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestMessage */
  Tag?: string;
}

/**
 * @Fantasy.interface IRequest
 * @response G2C_TestResponse
 */
export interface C2G_TestRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_TestResponse';
  Tag?: string;
  Data: readonly number[];
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_TestResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_TestResponse */
  /** 框架响应错误码 */
  errorCode?: number;
  Tag?: string;
  Data: number[];
  Lists: readonly number[];
}

/**
 * @Fantasy.interface IMessage
 */
export interface C2G_TestRequestPushMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestRequestPushMessage */
}

/**
 * Gate服务器推送一个消息给客户端
 * @Fantasy.interface IMessage
 */
export interface G2C_PushMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_PushMessage */
  /**
   * 标记
   */
  Tag?: string;
}

/**
 * @Fantasy.interface IRequest
 * @response G2C_CreateAddressableResponse
 */
export interface C2G_CreateAddressableRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_CreateAddressableRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_CreateAddressableResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_CreateAddressableResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_CreateAddressableResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * @Fantasy.interface IAddressableMessage
 */
export interface C2M_TestMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2M_TestMessage */
  Tag?: string;
}

/**
 * @Fantasy.interface IAddressableRequest
 * @response M2C_TestResponse
 */
export interface C2M_TestRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2M_TestRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'M2C_TestResponse';
  Tag?: string;
}

/**
 * @Fantasy.interface IAddressableResponse
 */
export interface M2C_TestResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.M2C_TestResponse */
  /** 框架响应错误码 */
  errorCode?: number;
  Tag?: string;
}

/**
 * 通知Gate服务器创建一个Chat的Route连接
 * @Fantasy.interface IRequest
 * @response G2C_CreateChatRouteResponse
 */
export interface C2G_CreateChatRouteRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_CreateChatRouteRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_CreateChatRouteResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_CreateChatRouteResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_CreateChatRouteResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 发送一个Route消息给Chat
 * @Fantasy.interface ICustomRouteMessage
 * @route Fantasy.RouteType.ChatRoute
 */
export interface C2Chat_TestMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Chat_TestMessage */
  /** 路由类型常量: Fantasy.RouteType.ChatRoute */
  routeType?: number;
  Tag?: string;
}

/**
 * 发送一个RPCRoute消息给Chat
 * @Fantasy.interface ICustomRouteRequest
 * @response Chat2C_TestMessageResponse
 * @route Fantasy.RouteType.ChatRoute
 */
export interface C2Chat_TestMessageRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Chat_TestMessageRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'Chat2C_TestMessageResponse';
  /** 路由类型常量: Fantasy.RouteType.ChatRoute */
  routeType?: number;
  Tag?: string;
}

/**
 * @Fantasy.interface ICustomRouteResponse
 */
export interface Chat2C_TestMessageResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.Chat2C_TestMessageResponse */
  /** 框架响应错误码 */
  errorCode?: number;
  Tag?: string;
}

/**
 * 发送一个RPC消息给Map，让Map里的Entity转移到另外一个Map上
 * @Fantasy.interface IAddressableRequest
 * @response M2C_MoveToMapResponse
 */
export interface C2M_MoveToMapRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2M_MoveToMapRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'M2C_MoveToMapResponse';
}

/**
 * @Fantasy.interface IAddressableResponse
 */
export interface M2C_MoveToMapResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.M2C_MoveToMapResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 发送一个消息给Gate，让Gate发送一个Addressable消息给MAP
 * @Fantasy.interface IMessage
 */
export interface C2G_SendAddressableToMap {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_SendAddressableToMap */
  Tag?: string;
}

/**
 * 发送一个消息给Chat，让Chat服务器主动推送一个RouteMessage消息给客户端
 * @Fantasy.interface ICustomRouteMessage
 * @route Fantasy.RouteType.ChatRoute
 */
export interface C2Chat_TestRequestPushMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Chat_TestRequestPushMessage */
  /** 路由类型常量: Fantasy.RouteType.ChatRoute */
  routeType?: number;
}

/**
 * Chat服务器主动推送一个消息给客户端
 * @Fantasy.interface ICustomRouteMessage
 * @route Fantasy.RouteType.ChatRoute
 */
export interface Chat2C_PushMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.Chat2C_PushMessage */
  /** 路由类型常量: Fantasy.RouteType.ChatRoute */
  routeType?: number;
  Tag?: string;
}

/**
 * 客户端发送给Gate服务器通知map服务器创建一个SubScene
 * @Fantasy.interface IRequest
 * @response G2C_CreateSubSceneResponse
 */
export interface C2G_CreateSubSceneRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_CreateSubSceneRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_CreateSubSceneResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_CreateSubSceneResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_CreateSubSceneResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 客户端通知Gate服务器给SubScene发送一个消息
 * @Fantasy.interface IMessage
 */
export interface C2G_SendToSubSceneMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_SendToSubSceneMessage */
}

/**
 * 客户端通知Gate服务器创建一个SubScene的Address消息
 * @Fantasy.interface IRequest
 * @response G2C_CreateSubSceneAddressableResponse
 */
export interface C2G_CreateSubSceneAddressableRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_CreateSubSceneAddressableRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_CreateSubSceneAddressableResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_CreateSubSceneAddressableResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_CreateSubSceneAddressableResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 客户端向SubScene发送一个测试消息
 * @Fantasy.interface IAddressableMessage
 */
export interface C2SubScene_TestMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2SubScene_TestMessage */
  Tag?: string;
}

/**
 * 客户端向SubScene发送一个销毁测试消息
 * @Fantasy.interface IAddressableMessage
 */
export interface C2SubScene_TestDisposeMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2SubScene_TestDisposeMessage */
}

/**
 * 客户端向服务器发送连接消息（Roaming）
 * @Fantasy.interface IRequest
 * @response G2C_ConnectRoamingResponse
 */
export interface C2G_ConnectRoamingRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_ConnectRoamingRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_ConnectRoamingResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_ConnectRoamingResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_ConnectRoamingResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 测试一个Chat漫游普通消息
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.ChatRoamingType
 */
export interface C2Chat_TestRoamingMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Chat_TestRoamingMessage */
  /** 路由类型常量: Fantasy.RoamingType.ChatRoamingType */
  routeType?: number;
  Tag?: string;
}

/**
 * 测试一个Map漫游普通消息
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface C2Map_TestRoamingMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Map_TestRoamingMessage */
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
  Tag?: string;
}

/**
 * 测试一个Chat漫游RPC消息
 * @Fantasy.interface IRoamingRequest
 * @response Chat2C_TestRPCRoamingResponse
 * @route Fantasy.RoamingType.ChatRoamingType
 */
export interface C2Chat_TestRPCRoamingRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Chat_TestRPCRoamingRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'Chat2C_TestRPCRoamingResponse';
  /** 路由类型常量: Fantasy.RoamingType.ChatRoamingType */
  routeType?: number;
  Tag?: string;
}

/**
 * @Fantasy.interface IRoamingResponse
 */
export interface Chat2C_TestRPCRoamingResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.Chat2C_TestRPCRoamingResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 客户端发送一个漫游消息给Map通知Map主动推送一个消息给客户端
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface C2Map_PushMessageToClient {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Map_PushMessageToClient */
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
  Tag?: string;
}

/**
 * 漫游端发送一个消息给客户端
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface Map2C_PushMessageToClient {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.Map2C_PushMessageToClient */
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
  Tag?: string;
}

/**
 * 测试传送漫游的触发协议
 * @Fantasy.interface IRoamingRequest
 * @response Map2C_TestTransferResponse
 * @route Fantasy.RoamingType.MapRoamingType
 */
export interface C2Map_TestTransferRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Map_TestTransferRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'Map2C_TestTransferResponse';
  /** 路由类型常量: Fantasy.RoamingType.MapRoamingType */
  routeType?: number;
}

/**
 * @Fantasy.interface IRoamingResponse
 */
export interface Map2C_TestTransferResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.Map2C_TestTransferResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 测试一个Chat发送到Map之间漫游协议
 * @Fantasy.interface IRoamingMessage
 * @route Fantasy.RoamingType.ChatRoamingType
 */
export interface C2Chat_TestSendMapMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2Chat_TestSendMapMessage */
  /** 路由类型常量: Fantasy.RoamingType.ChatRoamingType */
  routeType?: number;
  Tag?: string;
}

/**
 * 通知Gate服务器发送一个Route消息给Map的漫游终端
 * @Fantasy.interface IMessage
 */
export interface C2G_TestRouteToRoaming {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestRouteToRoaming */
  Tag?: string;
}

/**
 * 通知Gate服务器发送一个漫游消息给Map的漫游终端
 * @Fantasy.interface IMessage
 */
export interface C2G_TestRoamingToRoaming {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestRoamingToRoaming */
  Tag?: string;
}

/**
 * 客户端向服务器发送登录连接消息（Roaming）
 * @Fantasy.interface IRequest
 * @response G2C_ConnectRoamingResponse
 */
export interface C2G_LoginRoamingRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_LoginRoamingRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_ConnectRoamingResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_LoginRoamingResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_LoginRoamingResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 通知Gate服务器发送一个内网消息通知Map服务器向Gate服务器注册一个领域事件
 * @Fantasy.interface IRequest
 * @response G2C_SubscribeSphereEventResponse
 */
export interface C2G_SubscribeSphereEventRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_SubscribeSphereEventRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_SubscribeSphereEventResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_SubscribeSphereEventResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_SubscribeSphereEventResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 通知Gate发送一个订阅领域事件
 * @Fantasy.interface IRequest
 * @response G2C_PublishSphereEventResponse
 */
export interface C2G_PublishSphereEventRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_PublishSphereEventRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_PublishSphereEventResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_PublishSphereEventResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_PublishSphereEventResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 通知Gate取消一个订阅领域事件
 * @Fantasy.interface IRequest
 * @response G2C_UnsubscribeSphereEventResponse
 */
export interface C2G_UnsubscribeSphereEventRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_UnsubscribeSphereEventRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_UnsubscribeSphereEventResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_UnsubscribeSphereEventResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_UnsubscribeSphereEventResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

/**
 * 通知Map取消一个订阅领域事件
 * @Fantasy.interface IRequest
 * @response G2C_MapUnsubscribeSphereEventResponse
 */
export interface C2G_MapUnsubscribeSphereEventRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_MapUnsubscribeSphereEventRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_MapUnsubscribeSphereEventResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_MapUnsubscribeSphereEventResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_MapUnsubscribeSphereEventResponse */
  /** 框架响应错误码 */
  errorCode?: number;
}

export interface ChatInfoData {
  Data: number[];
}

export interface TestMemoryPackInfo {
  A?: string;
}

/**
 * @Fantasy.interface IRequest
 * @response G2C_TestMemoryPackResponse
 */
export interface C2G_TestMemoryPackRequest {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestMemoryPackRequest */
  /** 对应响应消息类型（仅类型提示，不参与序列化） */
  __responseType?: 'G2C_TestMemoryPackResponse';
}

/**
 * @Fantasy.interface IResponse
 */
export interface G2C_TestMemoryPackResponse {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.G2C_TestMemoryPackResponse */
  /** 框架响应错误码 */
  errorCode?: number;
  Info?: TestMemoryPackInfo;
}

/**
 * 测试使用ErrorCode枚举的消息
 * @Fantasy.interface IMessage
 */
export interface C2G_TestEnumMessage {
  /** OpCode 常量见 "./OuterOpcode.ts" 中的 OuterOpcode.C2G_TestEnumMessage */
  /**
   * 错误码
   */
  Code: ErrorCodeEnum;
  /**
   * 消息内容
   */
  Message?: string;
  /**
   * 玩家状态
   */
  State: PlayerState;
}
