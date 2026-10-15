/**
 * Fantasy Cocos 联网示例
 *
 * 对齐服务端 Hotfix Functional Examples：
 * - HTTPHandler          → HTTP GET/POST（fetch）
 * - Outer/NormalMessage  → Gate 普通消息 / RPC / 推送
 * - Outer/Roaming/Chat   → ConnectRoaming 后的 Chat 漫游消息
 *
 * 用法：
 * 1. npm install（link 扩展 + build:proto 生成静态 pb）
 * 2. ProtocolExportTool 导出绑定到 assets/scripts/proto
 * 3. 扩展管理器确认 fantasy-cocos 已启用
 * 4. 挂载本组件到场景节点后预览
 *
 * Gate WebSocket 默认 127.0.0.1:20000；HTTP 需 Scene 配置 NetworkProtocol=HTTP 并监听 httpBaseUrl。
 */

import { _decorator, Component } from 'cc';
import {
  netChannel,
  NetConfig,
  NetNodeState,
} from 'db://fantasy-cocos/index';
import { ProtoOuterDispatcher } from 'db://fantasy-cocos/protobuf/index';
import { OuterOpcode } from '../proto/OuterOpcode';
import {
  OuterPush,
  OuterRpc,
  OuterSend,
  type G2C_TestResponse,
} from '../proto/OuterProtocol';
import { registerOuterProtobufMessages } from '../proto/ProtoOuterDispatcherInit';
import { getOuterProtoRoot } from '../proto/pb';

const { ccclass, property } = _decorator;

@ccclass('FantasyNetChannelDemo')
export class FantasyNetChannelDemo extends Component {
  @property({ tooltip: 'Gate WebSocket Host' })
  remoteHost = '127.0.0.1';

  @property({ tooltip: 'Gate WebSocket Port' })
  remotePort = '20000';

  @property({ tooltip: 'WebSocket path' })
  remotePath = '/';

  @property({ tooltip: '使用 wss' })
  useTls = false;

  @property({ tooltip: 'HTTP 示例根地址（对应 HTTPHandler Controllers）' })
  httpBaseUrl = 'http://127.0.0.1:20010';

  @property({ tooltip: '连接成功后自动跑下方示例' })
  autoSendTest = true;

  @property({ tooltip: '跑 HTTPHandler 示例（不依赖 WebSocket）' })
  runHttpExamples = true;

  @property({ tooltip: '跑 Outer/NormalMessage 示例' })
  runNormalMessageExamples = true;

  @property({ tooltip: '跑 Outer/Roaming/Chat 示例（先 ConnectRoaming）' })
  runRoamingChatExamples = true;

  private _stop: (() => void) | null = null;
  private _roamingReady = false;

  onLoad(): void {
    void this.startDemo();
  }

  onDestroy(): void {
    this._stop?.();
    this._stop = null;
  }

  /** 手动重连并跑示例 */
  public async startDemo(): Promise<void> {
    this._stop?.();
    this._stop = await this.runNetChannelDemo();
  }

  private async runNetChannelDemo(): Promise<() => void> {
    if (this.runHttpExamples) {
      await this.demoHttpHandlerExamples();
    }

    // 静态 pb：npm run build:proto → assets/scripts/proto/pb/outer_pb.js
    const dispatcher = new ProtoOuterDispatcher(getOuterProtoRoot());
    registerOuterProtobufMessages(dispatcher);

    dispatcher.onDecoded = (evt) => {
      console.log(
        '[Fantasy Cocos] decoded',
        `opcode=${evt.protocolCode}`,
        `rpcId=${evt.rpcId}`,
        `type=${evt.typeName}`,
        evt.message.toJSON?.() ?? evt.message
      );
    };

    NetConfig.gameIp = this.remoteHost;
    NetConfig.gamePort = this.remotePort;
    NetConfig.gamePath = this.remotePath;
    NetConfig.useTls = this.useTls;
    NetConfig.autoReconnect = 0;

    netChannel.gameCreate();
    netChannel.game.setProtoDispatcher(dispatcher);
    this.registerPushHandlers();

    netChannel.gameConnect();
    await this.waitUntilWorking(8000);
    console.log('[Fantasy Cocos] connected (Working)');

    if (this.autoSendTest) {
      if (this.runNormalMessageExamples) {
        await this.demoNormalMessageExamples();
      }
      if (this.runRoamingChatExamples) {
        await this.demoRoamingChatExamples();
      }
    }

    return () => {
      netChannel.gameClose();
      this._roamingReady = false;
    };
  }

  /** 注册服务端 → 客户端推送监听 */
  private registerPushHandlers(): void {
    // NormalMessage: C2G_TestRequestPushMessage → session.Send(G2C_PushMessage)
    netChannel.game.on(OuterPush.G2C_PushMessage, (data) => {
      console.log('[NormalMessage] recv push G2C_PushMessage', data);
    });

    // Roaming/Chat 相关推送（Chat / Map 经 Gate 转发）
    netChannel.game.on(OuterPush.Chat2C_PushMessage, (data) => {
      console.log('[Roaming/Chat] recv push Chat2C_PushMessage', data);
    });
    netChannel.game.on(OuterPush.Map2C_PushMessageToClient, (data) => {
      console.log('[Roaming/Chat] recv push Map2C_PushMessageToClient', data);
    });
  }

  // ---------------------------------------------------------------------------
  // HTTPHandler（HelloController / UsersController / ProductsController）
  // ---------------------------------------------------------------------------

  /**
   * 对应 examples/Server/.../HTTPHandler
   * 需服务器 Scene 以 HTTP 协议监听 httpBaseUrl（与 Outer WebSocket 独立）。
   * Cocos 浏览器预览跨域依赖服务端 HttpCorsConfigure（AllowAll）。
   */
  public async demoHttpHandlerExamples(): Promise<void> {
    const base = this.httpBaseUrl.replace(/\/$/, '');
    console.log('[HTTPHandler] base =', base);

    await this.httpGetText(`${base}/api/Hello/greet`, 'Hello.Greet');
    await this.httpGetText(`${base}/api/Users/greet`, 'Users.Greet');
    await this.httpGetText(`${base}/api/Users/1001`, 'Users.GetUser');
    await this.httpPostJson(`${base}/api/Users/register`, { Id: 1001, Name: 'cocos-demo' }, 'Users.Register');
    await this.httpPostJson(`${base}/api/Products`, { Id: 1, Name: 'demo-product' }, 'Products.Create');
  }

  // ---------------------------------------------------------------------------
  // Outer/NormalMessage/Gate
  // ---------------------------------------------------------------------------

  /**
   * 对应 C2G_TestMessage / C2G_TestRequest / C2G_TestRequestPushMessage
   */
  public async demoNormalMessageExamples(): Promise<void> {
    this.demoSendTestMessage();
    await this.demoCallTestRequest();
    this.demoRequestPushMessage();
  }

  /** send：C2G_TestMessage → C2G_TestMessageHandler */
  public demoSendTestMessage(): void {
    netChannel.game.send(OuterSend.C2G_TestMessage, {
      Tag: 'hello-from-cocos-client',
    });
    console.log(
      '[NormalMessage] send C2G_TestMessage',
      `opcode=${OuterOpcode.C2G_TestMessage}`
    );
  }

  /** call：C2G_TestRequest ↔ G2C_TestResponse → C2G_TestRequestHandler */
  public async demoCallTestRequest(): Promise<void> {
    const ret = await netChannel.game.call(OuterRpc.C2G_TestRequest, {
      Tag: 'hello-from-cocos-call',
      // Fantasy `repeatedList byte` → 标准 `bytes`（与 LightProto List<byte> 一致）
      Data: Uint8Array.from([1, 2, 3]),
    });

    if (!ret.isSucc) {
      console.warn('[NormalMessage] call C2G_TestRequest failed', ret.err);
      return;
    }

    // G2C_TestResponse = Fantasy.Network.Message.IG2C_TestResponse（plain 接口）
    const res: G2C_TestResponse | undefined = ret.res;
    console.log(
      '[NormalMessage] call C2G_TestRequest ok',
      `errorCode=${res?.errorCode ?? 0}`,
      `Tag=${res?.Tag ?? ''}`,
      `Data=${res?.Data ? Array.from(res.Data).join(',') : ''}`,
      `Lists=${res?.Lists?.join(',') ?? ''}`
    );
  }

  /**
   * send：C2G_TestRequestPushMessage
   * 服务端会 session.Send(G2C_PushMessage)，由 registerPushHandlers 接收。
   */
  public demoRequestPushMessage(): void {
    netChannel.game.send(OuterSend.C2G_TestRequestPushMessage, {});
    console.log(
      '[NormalMessage] send C2G_TestRequestPushMessage → expect G2C_PushMessage',
      `opcode=${OuterOpcode.C2G_TestRequestPushMessage}`
    );
  }

  // ---------------------------------------------------------------------------
  // Outer/Roaming/Chat
  // ---------------------------------------------------------------------------

  /**
   * 对齐 Unity Roaming.cs：先 C2G_ConnectRoamingRequest（建 Map+Chat 漫游），
   * 再发 Chat 侧消息（对应 Roaming/Chat 三个 Handler）。
   */
  public async demoRoamingChatExamples(): Promise<void> {
    const ok = await this.demoConnectRoaming();
    if (!ok) {
      console.warn('[Roaming/Chat] ConnectRoaming 失败，跳过 Chat 示例');
      return;
    }

    this.demoSendChatRoamingMessage();
    await this.demoCallChatRpcRoaming();
    this.demoSendChatToMapMessage();
  }

  /** call：C2G_ConnectRoamingRequest ↔ G2C_ConnectRoamingResponse */
  public async demoConnectRoaming(): Promise<boolean> {
    const ret = await netChannel.game.call(OuterRpc.C2G_ConnectRoamingRequest, {});

    if (!ret.isSucc) {
      console.warn('[Roaming/Chat] ConnectRoaming failed', ret.err);
      this._roamingReady = false;
      return false;
    }

    const errorCode = ret.res?.errorCode ?? 0;
    if (errorCode !== 0) {
      console.warn('[Roaming/Chat] ConnectRoaming ErrorCode =', errorCode, ret.res);
      this._roamingReady = false;
      return false;
    }

    this._roamingReady = true;
    console.log('[Roaming/Chat] ConnectRoaming ok（Map + Chat 漫游已就绪）', ret.res);
    return true;
  }

  /** send：C2Chat_TestRoamingMessage → C2Chat_TestRoamingMessageHandler */
  public demoSendChatRoamingMessage(): void {
    if (!this._roamingReady) {
      console.warn('[Roaming/Chat] 请先 ConnectRoaming');
      return;
    }
    netChannel.game.send(OuterSend.C2Chat_TestRoamingMessage, {
      Tag: 'Hi Roaming from Cocos',
    });
    console.log(
      '[Roaming/Chat] send C2Chat_TestRoamingMessage',
      `opcode=${OuterOpcode.C2Chat_TestRoamingMessage}`
    );
  }

  /** call：C2Chat_TestRPCRoamingRequest ↔ Chat2C_TestRPCRoamingResponse */
  public async demoCallChatRpcRoaming(): Promise<void> {
    if (!this._roamingReady) {
      console.warn('[Roaming/Chat] 请先 ConnectRoaming');
      return;
    }

    const ret = await netChannel.game.call(OuterRpc.C2Chat_TestRPCRoamingRequest, {
      Tag: 'Hi RPCRoaming from Cocos',
    });

    if (ret.isSucc) {
      console.log('[Roaming/Chat] call C2Chat_TestRPCRoamingRequest ok', ret.res);
    } else {
      console.warn('[Roaming/Chat] call C2Chat_TestRPCRoamingRequest failed', ret.err);
    }
  }

  /**
   * send：C2Chat_TestSendMapMessage → C2Chat_TestSendMapMessageHandler
   * Chat Terminus 会再向 Map 发内网漫游消息（客户端侧无直接回包）。
   */
  public demoSendChatToMapMessage(): void {
    if (!this._roamingReady) {
      console.warn('[Roaming/Chat] 请先 ConnectRoaming');
      return;
    }
    netChannel.game.send(OuterSend.C2Chat_TestSendMapMessage, {
      Tag: 'Hi SendInnerRoamingMessage from Cocos',
    });
    console.log(
      '[Roaming/Chat] send C2Chat_TestSendMapMessage',
      `opcode=${OuterOpcode.C2Chat_TestSendMapMessage}`
    );
  }

  // ---------------------------------------------------------------------------
  // helpers
  // ---------------------------------------------------------------------------

  private async httpGetText(url: string, label: string): Promise<void> {
    try {
      const res = await fetch(url, { method: 'GET' });
      const text = await res.text();
      if (!res.ok) {
        console.warn(`[HTTPHandler] ${label} HTTP ${res.status}`, text);
        return;
      }
      console.log(`[HTTPHandler] ${label} ok`, text);
    } catch (e) {
      console.warn(`[HTTPHandler] ${label} failed（请确认 HTTP Scene 已监听 ${this.httpBaseUrl}）`, e);
    }
  }

  private async httpPostJson(url: string, body: unknown, label: string): Promise<void> {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const text = await res.text();
      if (!res.ok) {
        console.warn(`[HTTPHandler] ${label} HTTP ${res.status}`, text);
        return;
      }
      console.log(`[HTTPHandler] ${label} ok`, text);
    } catch (e) {
      console.warn(`[HTTPHandler] ${label} failed（请确认 HTTP Scene 已监听 ${this.httpBaseUrl}）`, e);
    }
  }

  private async waitUntilWorking(timeoutMs: number): Promise<void> {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      if (netChannel.game?.state === NetNodeState.Working) {
        return;
      }
      await new Promise((r) => setTimeout(r, 50));
    }
    throw new Error(
      `[Fantasy Cocos] connect timeout (${timeoutMs}ms), state=${netChannel.game?.state}`
    );
  }
}
