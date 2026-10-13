/** 轻量日志，避免依赖 Cocos `cc` 或外部 Logger */
export const Logger = {
  logNet(...args: unknown[]): void {
    console.log('[Fantasy.Net]', ...args);
  },
  warn(...args: unknown[]): void {
    console.warn('[Fantasy.Net]', ...args);
  },
  error(...args: unknown[]): void {
    console.error('[Fantasy.Net]', ...args);
  },
};
