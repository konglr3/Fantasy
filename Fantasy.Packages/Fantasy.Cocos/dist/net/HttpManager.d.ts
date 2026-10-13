/** HTTP请求返回值 */
export declare class HttpReturn<T> {
    /** 是否请求成功 */
    isSucc: boolean;
    /** 请求返回数据 */
    res?: T;
    /** 请求错误数据 */
    err?: HttpEvent;
}
/** 请求事件 */
export declare enum HttpEvent {
    /** 断网 */
    ERROR_NO_NETWORK = "ERROR_NO_NETWORK",
    /** 未知错误 */
    ERROR_UNKNOWN = "ERROR_UNKNOWN",
    /** 请求超时 */
    ERROR_TIMEOUT = "ERROR_TIMEOUT"
}
/** 请求后相应返回数据类型 */
declare enum HttpResponseType {
    Text = 0,
    Json = 1,
    ArrayBuffer = 2,
    Blob = 3,
    FormData = 4
}
/** 请求方法 */
declare enum HttpMethod {
    GET = "GET",
    POST = "POST"
}
/** HTTP请求 */
export declare class HttpManager {
    /** 服务器地址 */
    server: string;
    /** 请求超时(毫秒) */
    timeout: number;
    /**
     * GET请求获取文本格式数据
     * @param name      协议名
     * @param params    请求参数据
     * @returns HTTP请求返回值
     */
    getText(name: string, params?: BodyInit | null): Promise<HttpReturn<any>>;
    /**
     * GET请求获取Json格式数据
     * @param name      协议名
     * @param params    请求参数据
     * @returns HTTP请求返回值
     */
    getJson(name: string, params?: BodyInit | null): Promise<HttpReturn<any>>;
    /**
     * POST请求获取Json格式数据
     * @param name      协议名
     * @param params    请求参数据
     * @returns HTTP请求返回值
     */
    postJson(name: string, params?: BodyInit | null): Promise<HttpReturn<any>>;
    /**
     * Protobuf请求处理
     * @param req       请求参数Protobuf数据对象名
     * @param res       相应数据Protobuf数据对象名
     * @param cmd       请求协议命令名
     * @param params    请求参参数对象
     * @returns HTTP请求返回值
     */
    postProtobuf<T>(cmd: number, req: string, res: string, params?: any): Promise<HttpReturn<T>>;
    /**
     * 取消请求中的请求
     * @param name      请求命令
     * @param params    请求参数
     */
    abort(name: string, params: any): void;
    /**
     * 请求处理
     * @param name      请求命令
     * @param params    请求参数
     * @param method    请求方式
     * @param type      响应数据类型
     * @param headers   请求头信息
     * @returns
     */
    request<T>(name: string, params: any, method: HttpMethod, type: HttpResponseType, headers: Map<string, string>): Promise<HttpReturn<T>>;
    /**
     * 获取请求字符串
     * @param name      请求命令
     * @param params    请求参数
     * @returns
     */
    private getRequestStr;
    /**
     * 获得字符串形式的参数
     * @param params 参数对象
     * @returns 参数字符串
     */
    private getParamString;
}
export {};
//# sourceMappingURL=HttpManager.d.ts.map