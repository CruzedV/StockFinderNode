import axios from "axios"
import { IShare } from "../Interfaces/Instruments.ts/IShare";
import { IBond } from "../Interfaces/Instruments.ts/IBond";
import { ICurrency } from "../Interfaces/Instruments.ts/ICurrency";
import { IETF } from "../Interfaces/Instruments.ts/IETF";

export async function GetShares(url:string, low:number, high:number) {
  const res = await axios.get(url);
  return await res.data.slice(low, high) as Array<IShare>;
}

export async function GetBonds(url:string, low:number, high:number) {
  const res = await axios.get(url);
  return await res.data.slice(low, high) as Array<IBond>;
}

export async function GetCurrency(url:string, low:number, high:number) {
  const res = await axios.get(url);
  return await res.data.slice(low, high) as Array<ICurrency>;
}

export async function GetETF(url:string, low:number, high:number) {
  const res = await axios.get(url);
  return await res.data.slice(low, high) as Array<IETF>;
}