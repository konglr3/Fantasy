/**
 * 基于 src/net（NetChannelManager / NetNodeGame）连接 Fantasy 服务器的示例。
 * 协议请先用 ProtocolExportTool 导出到 src/proto。
 */

import protobuf from 'protobufjs';
import { netChannel, NetConfig } from '../../src';
import { ProtoOuterDispatcher } from '../../src/protobuf';
import { OuterOpcode } from '../../src/proto/OuterOpcode';
import { registerOuterProtobufMessages } from '../../src/proto/ProtoOuterDispatcherInit';

export interface NetChannelDemoOptions {
  protoRootOrPath: protobuf.Root | string;
  remoteHost?: string;
  remotePort?: string;
  path?: string;
  useTls?: boolean;
  autoSendTest?: boolean;
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

  // 监听推送
  if (OuterOpcode.G2C_PushMessage) {
    netChannel.game.on(OuterOpcode.G2C_PushMessage, 'G2C_PushMessage', (data) => {
      console.log('[NetChannel Demo] push G2C_PushMessage', data);
    });
  }

  netChannel.gameConnect();

  // 简单等待连接（Working 状态由内部回调推进；此处给一点时间）
  await new Promise((r) => setTimeout(r, 500));

  if (options.autoSendTest !== false) {
    netChannel.game.notify(OuterOpcode.C2G_TestMessage, 'C2G_TestMessage', {
      Tag: 'hello-from-net-channel',
    });
    console.log('[NetChannel Demo] sent C2G_TestMessage');
  }

  return () => {
    netChannel.gameClose();
  };
}
