export { PacketConstants } from './packet/PacketConstants';
export { MaxOuterMessageBodySize } from './network/ProgramDefine';
export { OpCode, OpCodeProtocolType, OpCodeType, createOpCode, decodeOpCodeId, encodeOpCodeId } from './network/OpCode';
export type { OpCodeIdParts } from './network/OpCode';
export { OuterStreamReassembler, encodeOuterFrame } from './network/OuterStreamReassembler';
export type { OuterPacket } from './network/OuterStreamReassembler';
export { WebSocketSession } from './network/WebSocketSession';
export type { SendOuterParams } from './network/WebSocketSession';
export { FantasyRuntime, NetworkProtocolType } from './runtime/FantasyRuntime';
export type { ConnectOptions } from './runtime/FantasyRuntime';
export { Scene } from './runtime/Scene';
export { Logger, NetManager, NetNode, NetNodeState, NetTipsType, WebSocketReturn, WebSock, IProtocolHelper, isOuterPushDef, isOuterRpcDef, isOuterSendDef, NetProtocolProtobuf, NetProtocolJson, NetChannelType, NetChannelManager, netChannel, NetConfig, NetErrorCode, NetGameTips, NetNodeGame, } from './net';
export type { CallbackObject, INetworkTips, IRequestProtocol, IResponseProtocol, ISocket, MessageFunc, NetCallFunc, NetData, NetConnectOptions, OuterPushDef, OuterRpcDef, OuterSendDef, SocketFunc, } from './net';
//# sourceMappingURL=index.d.ts.map