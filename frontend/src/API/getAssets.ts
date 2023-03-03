import axios from "axios"
import { IBuyInstrument } from "../Interfaces/IBuyInstrument";

export async function GetAssets(url: string, low: number, high: number) {
  const res = await axios.get(url);
  return await res.data.slice(low, high) as Array<IBuyInstrument>;
}