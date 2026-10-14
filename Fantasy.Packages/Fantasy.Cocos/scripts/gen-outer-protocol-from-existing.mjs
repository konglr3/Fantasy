import fs from 'fs';

const messagePath = 'src/proto/OuterMessage.ts';
const opcodePath = 'src/proto/OuterOpcode.ts';
const text = fs.readFileSync(messagePath, 'utf8');
const opcodes = fs.readFileSync(opcodePath, 'utf8');
const opcodeSet = new Set([...opcodes.matchAll(/^\s+(\w+):\s*\d+/gm)].map((m) => m[1]));

const blocks = text.split(/(?=export interface \w+)/);
const rpc = [];
const send = [];
const push = [];

for (const block of blocks) {
  const nameM = block.match(/export interface (\w+)/);
  if (!nameM) {
    continue;
  }
  const name = nameM[1];
  if (!opcodeSet.has(name)) {
    continue;
  }

  const respM = block.match(/__responseType\?:\s*'(\w+)'/);
  const isResponseDoc = /@Fantasy\.interface IResponse/.test(block) || /框架响应错误码/.test(block);
  // 仅服务端→客户端方向进入 OuterPush；C2* 一律按发送侧处理
  const looksPush =
    /^(G2C_|M2C_|Chat2C_|Map2C_)/.test(name) ||
    (name.endsWith('Response') && !/^C2/.test(name));

  if (respM) {
    rpc.push([name, respM[1]]);
  } else if (isResponseDoc || looksPush) {
    push.push(name);
  } else {
    send.push(name);
  }
}

const header = `/* eslint-disable */
// 本文件由 Fantasy ProtocolExportTool 自动生成，请勿手动编辑。

import { OuterOpcode } from './OuterOpcode';

`;

let out = header;
out += `/** 单向消息绑定（IMessage / Route / Roaming Message） */
export type OuterSendDef = { readonly opcode: number; readonly reqName: string };

/** RPC 绑定（IRequest ↔ ResponseType） */
export type OuterRpcDef = { readonly opcode: number; readonly reqName: string; readonly respName: string };

/** 推送 / 响应消息绑定（按 opcode 监听） */
export type OuterPushDef = { readonly opcode: number; readonly typeName: string };

/** send(def, params) 使用 */
export const OuterSend = {
`;
out += send
  .sort()
  .map((n) => `  ${n}: { opcode: OuterOpcode.${n}, reqName: '${n}' }`)
  .join(',\n');
out += `
} as const;

export type OuterSendKey = keyof typeof OuterSend;

/** callRpc(def, params) 使用：opcode / reqName / respName 已绑定 */
export const OuterRpc = {
`;
out += rpc
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([r, s]) => `  ${r}: { opcode: OuterOpcode.${r}, reqName: '${r}', respName: '${s}' }`)
  .join(',\n');
out += `
} as const;

export type OuterRpcKey = keyof typeof OuterRpc;

/** on(def, callback) 使用 */
export const OuterPush = {
`;
out += [...new Set(push)]
  .sort()
  .map((n) => `  ${n}: { opcode: OuterOpcode.${n}, typeName: '${n}' }`)
  .join(',\n');
out += `
} as const;

export type OuterPushKey = keyof typeof OuterPush;
`;

fs.writeFileSync('src/proto/OuterProtocol.ts', out);
fs.writeFileSync('examples/protocol/OuterProtocol.ts', out);
console.log({ send: send.length, rpc: rpc.length, push: push.length });
console.log(
  'rpc sample',
  rpc.filter(([n]) => n.includes('TestRequest') || n.includes('Login'))
);
