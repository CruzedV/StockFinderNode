import axios from "axios"
import { IShare } from "../Interfaces/IShare";

export async function GetShares(url:string, low:number, high:number) {
  const res = await axios.get(url);
  return await res.data.slice(low, high) as Array<IShare>;
}