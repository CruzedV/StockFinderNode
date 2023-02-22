import axios from "axios"
import { ICandle } from "../Interfaces/Positions/ICandle";

export async function getCandles(url:string, from: Date, to: Date) {
  const res = await axios.get(url+"/"+from.toISOString()+"/"+to.toISOString());
  return res.data.candles as Array<ICandle>
}