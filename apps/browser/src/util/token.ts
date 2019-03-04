// tslint:disable:unified-signatures

import { interfaces } from "inversify";

type Token<T> = string & interfaces.Abstract<T>;

const tokens: { [k: string]: Token<any> } = {};
const hasId = (id: string | symbol): boolean => id in tokens;
const uniqueId = (id: string | symbol) => {
  let s = id.toString();
  let n = 0;
  while (hasId(s)) {
    n++;
    s = `${id.toString()}.${n}`;
  }
  return s;
};

const token = <T>(id?: string | symbol): Token<T> => id as Token<T>;
const uniqueToken = <T>(id: string | symbol = (Math.random() * 16 * 16 * 16 * 16 * 16).toString(16)) =>
  token<T>(id ? uniqueId(id) : undefined);

export default uniqueToken;
