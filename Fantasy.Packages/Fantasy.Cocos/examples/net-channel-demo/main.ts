/**
 * 基于 src/net（NetChannelManager / NetNodeGame）连接 Fantasy 服务器的示例。
 * 演示协议导出 OuterProtocol 绑定后的简化 send / callRpc。
 *
 * 协议请先用 ProtocolExportTool 导出到 src/proto，并准备与服务器一致的 Outer .proto。
 */

import protobuf from 'protobufjs';
import { netChannel, NetConfig, NetNodeState } from '../../src';
import { ProtoOuterDispatcher } from '../../src/protobuf';
import { OuterOpcode } from '../../src/proto/OuterOpcode';
import { OuterPush, OuterRpc, OuterSend } from '../../src/proto/OuterProtocol';
import { registerOuterProtobufMessages } from '../../src/proto/ProtoOuterDispatcherInit';

/** 与导出协议 G2C_TestResponse 字段对齐（示例用，正式项目可直接 import OuterMessage） */
interface G2C_TestResponse {
  errorCode?: number;
  Tag?: string;
  Data?: number[];
  Lists?: readonly number[];
}

interface G2C_LoginGameResponse {
  errorCode?: number;
}

export interface NetChannelDemoOptions {
  protoRootOrPath: protobuf.Root | string;
  remoteHost?: string;
  remotePort?: string;
  path?: string;
  useTls?: boolean;
  /** 连接成功后是否自动演示 send / callRpc */
  autoSendTest?: boolean;
  /** 等待进入 Working 状态的超时（ms） */
  connectTimeoutMs?: number;
}

export async function runNetChannelDemo(options: NetChannelDemoOptions): Promise<() => void> {
  const root =
    typeof options.protoRootOrPath === 'string'
      ? await protobuf.load(options.protoRootOrPath)
      : options.protoRootOrPath;

  const dispatcher = new ProtoOuterDispatcher(root);
  registerOuterProtobufMessages(dispatcher);

  dispatcher.onDecoded = (evt) => {
    console.log(
      '[NetChannel Demo] decoded',
      `opcode=${evt.protocolCode}`,
      `rpcId=${evt.rpcId}`,
      `type=${evt.typeName}`,
      evt.message.toJSON?.() ?? evt.message
    );
  };

  NetConfig.gameIp = options.remoteHost ?? '127.0.0.1';
  NetConfig.gamePort = options.remotePort ?? '20000';
  NetConfig.gamePath = options.path ?? '/';
  NetConfig.useTls = options.useTls ?? false;
  NetConfig.autoReconnect = 0;

  netChannel.gameCreate();
  netChannel.game.setProtoDispatcher(dispatcher);

  // 推送监听：OuterPush 已绑定 opcode + typeName
  netChannel.game.on(OuterPush.G2C_PushMessage, (data) => {
    console.log('[NetChannel Demo] push G2C_PushMessage', data);
  });

  netChannel.gameConnect();
  await waitUntilWorking(options.connectTimeoutMs ?? 8000);
  console.log('[NetChannel Demo] connected (Working)');

  if (options.autoSendTest !== false) {
    demoSendMessage();
    await demoCallRpcTestRequest();
    await demoCallRpcLogin();
  }

  return () => {
    netChannel.gameClose();
  };
}

/**
 * send：单向消息 —— 只需 OuterSend 绑定 + 字段
 * 等价于旧写法：
 *   send(OuterOpcode.C2G_TestMessage, 'C2G_TestMessage', { Tag: '...' })
 */
export function demoSendMessage(): void {
  netChannel.game.send(OuterSend.C2G_TestMessage, {
    Tag: 'hello-from-net-channel-send',
  });
  console.log(
    '[NetChannel Demo] send OuterSend.C2G_TestMessage',
    `opcode=${OuterOpcode.C2G_TestMessage}`
  );
}

/**
 * callRpc：Request/Response —— 只需 OuterRpc 绑定 + 字段
 * 等价于旧写法：
 *   callRpc(OuterOpcode.C2G_TestRequest, 'C2G_TestRequest', 'G2C_TestResponse', { ... })
 */
export async function demoCallRpcTestRequest(): Promise<void> {
  const ret = await netChannel.game.call<G2C_TestResponse>(OuterRpc.C2G_TestRequest, {
    Tag: 'hello-from-callRpc',
    Data: [1, 2, 3],
  });

  if (ret.isSucc) {
    console.log('[NetChannel Demo] callRpc OuterRpc.C2G_TestRequest ok', ret.res);
  } else {
    console.warn('[NetChannel Demo] callRpc OuterRpc.C2G_TestRequest failed', ret.err);
  }
}

/** callRpc 登录示例 */
export async function demoCallRpcLogin(accountName = 'demo-cocos'): Promise<void> {
  const ret = await netChannel.game.call<G2C_LoginGameResponse>(OuterRpc.C2G_LoginGameRequest, {
    AccountName: accountName,
  });

  if (ret.isSucc) {
    console.log('[NetChannel Demo] callRpc OuterRpc.C2G_LoginGameRequest ok', ret.res);
  } else {
    console.warn('[NetChannel Demo] callRpc OuterRpc.C2G_LoginGameRequest failed', ret.err);
  }
}

async function waitUntilWorking(timeoutMs: number): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (netChannel.game?.state === NetNodeState.Working) {
      return;
    }
    await sleep(50);
  }
  throw new Error(`[NetChannel Demo] connect timeout (${timeoutMs}ms), state=${netChannel.game?.state}`);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
