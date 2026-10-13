/** 轻量日志，避免依赖 Cocos `cc` 或外部 Logger */
export const Logger = {
    logNet(...args) {
        console.log('[Fantasy.Net]', ...args);
    },
    warn(...args) {
        console.warn('[Fantasy.Net]', ...args);
    },
    error(...args) {
        console.error('[Fantasy.Net]', ...args);
    },
};
//# sourceMappingURL=Logger.js.map