/*
 * @Author: dgflash
 * @Date: 2022-09-01 18:00:28
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-09 18:10:50
 */
/** HTTP请求返回值 */
export class HttpReturn {
    constructor() {
        /** 是否请求成功 */
        this.isSucc = false;
    }
}
/** 请求事件 */
export var HttpEvent;
(function (HttpEvent) {
    /** 断网 */
    HttpEvent["ERROR_NO_NETWORK"] = "ERROR_NO_NETWORK";
    /** 未知错误 */
    HttpEvent["ERROR_UNKNOWN"] = "ERROR_UNKNOWN";
    /** 请求超时 */
    HttpEvent["ERROR_TIMEOUT"] = "ERROR_TIMEOUT";
})(HttpEvent || (HttpEvent = {}));
/** 请求后相应返回数据类型 */
var HttpResponseType;
(function (HttpResponseType) {
    HttpResponseType[HttpResponseType["Text"] = 0] = "Text";
    HttpResponseType[HttpResponseType["Json"] = 1] = "Json";
    HttpResponseType[HttpResponseType["ArrayBuffer"] = 2] = "ArrayBuffer";
    HttpResponseType[HttpResponseType["Blob"] = 3] = "Blob";
    HttpResponseType[HttpResponseType["FormData"] = 4] = "FormData";
})(HttpResponseType || (HttpResponseType = {}));
/** 请求方法 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
})(HttpMethod || (HttpMethod = {}));
const HeaderName = 'Content-Type';
const HeaderValueText = 'application/text';
const HeaderValueJson = 'application/json';
const HeaderValuePb = 'application/x-protobuf';
/** 当前请求地址集合 */
let urls = new Map();
/** HTTP请求 */
export class HttpManager {
    constructor() {
        /** 服务器地址 */
        this.server = "http://127.0.0.1/";
        /** 请求超时(毫秒) */
        this.timeout = 10000;
    }
    /**
     * GET请求获取文本格式数据
     * @param name      协议名
     * @param params    请求参数据
     * @returns HTTP请求返回值
     */
    getText(name, params = null) {
        let headers = new Map();
        headers.set(HeaderName, HeaderValueText);
        return this.request(name, params, HttpMethod.GET, HttpResponseType.Text, headers);
    }
    /**
     * GET请求获取Json格式数据
     * @param name      协议名
     * @param params    请求参数据
     * @returns HTTP请求返回值
     */
    getJson(name, params = null) {
        let headers = new Map();
        headers.set(HeaderName, HeaderValueJson);
        return this.request(name, params, HttpMethod.GET, HttpResponseType.Json, headers);
    }
    /**
     * POST请求获取Json格式数据
     * @param name      协议名
     * @param params    请求参数据
     * @returns HTTP请求返回值
     */
    postJson(name, params = null) {
        let headers = new Map();
        headers.set(HeaderName, HeaderValueJson);
        return this.request(name, params, HttpMethod.POST, HttpResponseType.Json, headers);
    }
    /**
     * Protobuf请求处理
     * @param req       请求参数Protobuf数据对象名
     * @param res       相应数据Protobuf数据对象名
     * @param cmd       请求协议命令名
     * @param params    请求参参数对象
     * @returns HTTP请求返回值
     */
    postProtobuf(cmd, req, res, params) {
        return new Promise(async (resolve, reject) => {
            let pc = proto;
            let pb;
            if (params) {
                pb = pc[req].encode(params).finish();
            }
            else {
                pb = null;
            }
            let headers = new Map();
            headers.set(HeaderName, HeaderValuePb);
            let r = await this.request(cmd.toString(), pb, HttpMethod.POST, HttpResponseType.ArrayBuffer, headers);
            if (r.isSucc) {
                let u8a = new Uint8Array(r.res);
                let decode = pc[res].decode(u8a);
                r.res = decode;
            }
            resolve(r);
        });
    }
    /**
     * 取消请求中的请求
     * @param name      请求命令
     * @param params    请求参数
     */
    abort(name, params) {
        let r = this.getRequestStr(name, params);
        let key = r[1];
        let data = urls.get(key);
        if (data) {
            data.xhr.abort();
        }
    }
    /**
     * 请求处理
     * @param name      请求命令
     * @param params    请求参数
     * @param method    请求方式
     * @param type      响应数据类型
     * @param headers   请求头信息
     * @returns
     */
    request(name, params, method, type, headers) {
        return new Promise((resolve, reject) => {
            let r = this.getRequestStr(name, params);
            let url = r[0];
            let key = r[1];
            let pss = r[2];
            let hrd = urls.get(key);
            if (hrd && hrd.pss == pss) {
                console.warn(`地址【${key}】已正在请求中，不能重复请求`);
                return;
            }
            let xhr = new XMLHttpRequest();
            // 防重复请求功能
            urls.set(key, { xhr, pss });
            if (method == HttpMethod.POST)
                xhr.open(HttpMethod.POST, url);
            else
                xhr.open(HttpMethod.GET, key);
            // 添加自定义请求头信息
            for (const [key, value] of headers)
                xhr.setRequestHeader(key, value);
            // 响应结果
            let ret = new HttpReturn();
            // 请求超时
            xhr.timeout = this.timeout;
            xhr.ontimeout = () => {
                urls.delete(key);
                ret.isSucc = false;
                ret.err = HttpEvent.ERROR_TIMEOUT; // 超时
                resolve(ret);
            };
            xhr.onloadend = (ev) => {
                if (xhr.status == 500) {
                    urls.delete(key);
                    ret.isSucc = false;
                    ret.err = HttpEvent.ERROR_NO_NETWORK; // 断网
                    resolve(ret);
                }
            };
            xhr.onerror = (ev) => {
                urls.delete(key);
                ret.isSucc = false;
                if (xhr.readyState == 0 || xhr.readyState == 1 || xhr.status == 0) {
                    ret.err = HttpEvent.ERROR_NO_NETWORK; // 断网
                }
                else {
                    ret.err = HttpEvent.ERROR_UNKNOWN; // 未知错误
                }
                resolve(ret);
            };
            xhr.onreadystatechange = (ev) => {
                if (xhr.readyState != 4)
                    return;
                urls.delete(key);
                if (xhr.status == 200) {
                    switch (type) {
                        case HttpResponseType.Text:
                            ret.res = xhr.response;
                            break;
                        case HttpResponseType.Json:
                            ret.res = JSON.parse(xhr.response);
                            break;
                        case HttpResponseType.ArrayBuffer:
                            ret.res = xhr.response;
                            break;
                        case HttpResponseType.Blob:
                            ret.res = xhr.response;
                            break;
                        case HttpResponseType.FormData:
                            ret.res = xhr.response;
                            break;
                    }
                    ret.isSucc = true;
                    resolve(ret);
                }
            };
            // 发送请求
            if (params == null || params == "") {
                xhr.send();
            }
            else {
                xhr.send(pss);
            }
        });
    }
    /**
     * 获取请求字符串
     * @param name      请求命令
     * @param params    请求参数
     * @returns
     */
    getRequestStr(name, params) {
        let url = "";
        let key = "";
        let paramsStr = "";
        if (name.toLocaleLowerCase().indexOf("http") == 0) {
            url = name;
        }
        else {
            url = this.server + name;
        }
        if (params) {
            paramsStr = this.getParamString(params);
            if (url.indexOf("?") > -1)
                key = url + "&" + paramsStr;
            else
                key = url + "?" + paramsStr;
        }
        else {
            key = url;
        }
        return [url, key, paramsStr];
    }
    /**
     * 获得字符串形式的参数
     * @param params 参数对象
     * @returns 参数字符串
     */
    getParamString(params) {
        let result = "";
        for (let name in params) {
            let data = params[name];
            if (data instanceof Object) {
                for (let key in data)
                    result += `${key}=${data[key]}&`;
            }
            else {
                result += `${name}=${data}&`;
            }
        }
        return result.substring(0, result.length - 1);
    }
}
//# sourceMappingURL=HttpManager.js.map