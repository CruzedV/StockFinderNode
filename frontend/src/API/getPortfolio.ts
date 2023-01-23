import axios from "axios"
// import { IPositionsData } from "../Interfaces/IData"
import { IInstrument } from "../Interfaces/IInstrument";

export async function GetPortfolio(url:string) {
  const res = await axios.get(url);
  console.log(res.data.positions)
  return await res.data.positions as Array<IInstrument>
  

}