import { Logger } from '../Logger';
import { INetworkTips } from '../NetInterface';

/** 游戏服务器网络提示（可按项目替换为 UI） */
export class NetGameTips implements INetworkTips {
  connectTips(isShow: boolean): void {
    if (isShow) {
      Logger.logNet('游戏服务器正在连接');
    } else {
      Logger.logNet('游戏服务器连接成功');
    }
  }

  reconnectTips(): void {
    Logger.logNet('正在重连游戏服务器');
  }

  requestTips(isShow: boolean): void {
    if (isShow) {
      Logger.logNet('有请求处理中');
    } else {
      Logger.logNet('所有请求结束');
    }
  }

  disconnectTips(isShow: boolean): void {
    Logger.logNet('断网', isShow);
  }
}
