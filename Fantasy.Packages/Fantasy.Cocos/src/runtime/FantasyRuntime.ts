import { Scene } from './Scene';
import { WebSocketSession } from '../network/WebSocketSession';

export enum NetworkProtocolType {
  TCP = 0,
  KCP = 1,
  WebSocket = 2
}

export interface ConnectOptions {
  remoteHost: string;
  remotePort: number;
  protocol: NetworkProtocolType;
  useTls?: boolean;
  path?: string;
  connectTimeoutMs?: number;
}

export class FantasyRuntime {
  private static _scene: Scene | null = null;
  private static _session: WebSocketSession | null = null;

  static get scene(): Scene {
    if (!FantasyRuntime._scene) {
      throw new Error('FantasyRuntime.scene is not initialized. Call connect() first.');
    }
    return FantasyRuntime._scene;
  }

  static get session(): WebSocketSession {
    if (!FantasyRuntime._session) {
      throw new Error('FantasyRuntime.session is not initialized. Call connect() first.');
    }
    return FantasyRuntime._session;
  }

  static async connect(options: ConnectOptions): Promise<WebSocketSession> {
    FantasyRuntime.dispose();

    if (options.protocol !== NetworkProtocolType.WebSocket) {
      throw new Error(
        `Fantasy.Cocos: protocol ${options.protocol} is not implemented. Use WebSocket or extend with native TCP/KCP.`
      );
    }

    const path = options.path ?? '/';
    const scheme = options.useTls ? 'wss' : 'ws';
    const url = `${scheme}://${options.remoteHost}:${options.remotePort}${path.startsWith('/') ? path : `/${path}`}`;

    FantasyRuntime._scene = new Scene();
    const session = new WebSocketSession();
    const timeout = options.connectTimeoutMs ?? 8000;

    await Promise.race([
      session.connect(url),
      new Promise<void>((_, reject) =>
        setTimeout(() => reject(new Error(`WebSocket connect timeout (${timeout}ms)`)), timeout)
      )
    ]);

    FantasyRuntime._session = session;
    return session;
  }

  static dispose(): void {
    FantasyRuntime._session?.dispose();
    FantasyRuntime._session = null;
    FantasyRuntime._scene?.dispose();
    FantasyRuntime._scene = null;
  }
}
