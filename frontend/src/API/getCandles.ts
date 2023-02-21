import axios from "axios"
import { ICandle } from "../Interfaces/Positions/ICandle";

export async function getCandles(url:string) {
  const res = await axios.get(url);
  return res.data.candles as Array<ICandle>
}