import { NetManager } from '../NetManager';
import { NetConfig } from './NetConfig';
import { NetNodeGame } from './NetNodeGame';

export enum NetChannelType {
  /** 游戏服务器 */
  Game = 0,
}

export class NetChannelManager {
  public game!: NetNodeGame;

  /** 创建游戏服务器节点 */
  gameCreate(): void {
    this.game = new NetNodeGame();
    this.game.setup();
    NetManager.getInstance().setNetNode(this.game, NetChannelType.Game);
  }

  /** 连接游戏服务器（Fantasy Outer WebSocket） */
  gameConnect(): void {
    const scheme = NetConfig.useTls ? 'wss' : 'ws';
    const path = NetConfig.gamePath.startsWith('/')
      ? NetConfig.gamePath
      : `/${NetConfig.gamePath}`;
    NetManager.getInstance().connect(
      {
        url: `${scheme}://${NetConfig.gameIp}:${NetConfig.gamePort}${path}`,
        autoReconnect: NetConfig.autoReconnect,
      },
      NetChannelType.Game
    );
  }

  /** 断开游戏服务器 */
  gameClose(): void {
    NetManager.getInstance().close(undefined, undefined, NetChannelType.Game);
  }
}

export const netChannel = new NetChannelManager();
