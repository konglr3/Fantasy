/**
 * Fantasy.Cocos 最小连接 + 收发 Demo
 *
 * 适用场景：Cocos Creator 3.x 脚本，或可提供 WebSocket / protobufjs 的 TS 环境。
 * 协议文件请先执行：npm run sync:protocol
 * 然后从 examples/protocol 引用 OuterOpcode / ProtoOuterDispatcherInit。
 *
 * 使用前请确认：
 * 1. 服务端 WebSocket 已监听（默认 127.0.0.1:20000）
 * 2. 已用 protobufjs 加载与服务器一致的 Outer .proto
 * 3. ProtoOuterDispatcherInit 中的 fullTypeName 能在 Root 中 lookup 到
 */

import protobuf from 'protobufjs';
import { FantasyRuntime, NetworkProtocolType } from '../../src/index';
import { ProtoOuterDispatcher, attachProtoOuterDispatcher } from '../../src/protobuf';
import { OuterOpcode } from '../protocol/OuterOpcode';
import { registerOuterProtobufMessages } from '../protocol/ProtoOuterDispatcherInit';

export interface DemoOptions {
  /** protobuf Root，或 .proto 文件路径（字符串时会 protobuf.load） */
  protoRootOrPath: protobuf.Root | string;
  remoteHost?: string;
  remotePort?: number;
  useTls?: boolean;
  path?: string;
  /** 连接成功后是否自动发一条测试消息 */
  autoSendTest?: boolean;
}

/**
 * 启动最小 Demo：连接 -> 注册 protobuf 分发 -> 收包日志 -> 可选发送。
 * @returns detach 函数（卸载 dispatcher 并 dispose runtime）
 */
export async function runMinimalWsDemo(options: DemoOptions): Promise<() => void> {
  const root =
    typeof options.protoRootOrPath === 'string'
      ? await protobuf.load(options.protoRootOrPath)
      : options.protoRootOrPath;

  const dispatcher = new ProtoOuterDispatcher(root);
  registerOuterProtobufMessages(dispatcher);

  dispatcher.onDecoded = (evt) => {
    console.log(
      '[Fantasy.Cocos Demo] decoded',
      `opcode=${evt.protocolCode}`,
      `rpcId=${evt.rpcId}`,
      `type=${evt.typeName}`,
      evt.message.toJSON?.() ?? evt.message,
    );
  };

  dispatcher.onUnknownOpcode = (packet) => {
    console.warn(
      '[Fantasy.Cocos Demo] unknown opcode',
      packet.protocolCode,
      `body=${packet.body.byteLength}`,
    );
  };

  dispatcher.onDecodeError = ({ packet, error }) => {
    console.error(
      '[Fantasy.Cocos Demo] decode error',
      packet.protocolCode,
      error,
    );
  };

  await FantasyRuntime.connect({
    remoteHost: options.remoteHost ?? '127.0.0.1',
    remotePort: options.remotePort ?? 20000,
    protocol: NetworkProtocolType.WebSocket,
    useTls: options.useTls ?? false,
    path: options.path ?? '/',
  });

  const detach = attachProtoOuterDispatcher(FantasyRuntime.session, dispatcher);

  FantasyRuntime.session.onClose = () => {
    console.log('[Fantasy.Cocos Demo] session closed');
  };

  FantasyRuntime.session.onError = (err) => {
    console.error('[Fantasy.Cocos Demo] session error', err);
  };

  console.log('[Fantasy.Cocos Demo] connected');

  if (options.autoSendTest !== false) {
    sendTestMessage(dispatcher);
  }

  return () => {
    detach();
    FantasyRuntime.dispose();
  };
}

/** 发送一条 C2G_TestMessage（Tag=hello-from-cocos） */
export function sendTestMessage(dispatcher: ProtoOuterDispatcher): void {
  const body = dispatcher.encodeBody('C2G_TestMessage', {
    Tag: 'hello-from-cocos',
  });

  FantasyRuntime.session.sendOuter({
    rpcId: 0,
    address: 0n,
    protocolCode: OuterOpcode.C2G_TestMessage,
    body,
  });

  console.log(
    '[Fantasy.Cocos Demo] sent C2G_TestMessage',
    `opcode=${OuterOpcode.C2G_TestMessage}`,
    `body=${body.byteLength}`,
  );
}

/**
 * Cocos 侧可直接挂到组件生命周期，例如：
 *
 * onLoad() {
 *   void this.startDemo();
 * }
 * async startDemo() {
 *   this._stop = await runMinimalWsDemo({
 *     protoRootOrPath: 'db://assets/resources/proto/OuterMessage.proto',
 *     // 若 Creator 无法直接 load 路径，可改为预加载 Root 后传入
 *   });
 * }
 * onDestroy() {
 *   this._stop?.();
 * }
 */
