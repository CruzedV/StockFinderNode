import axios from "axios"
import { IAsset } from "../Interfaces/IAsset";

export async function GetAssets(url:string) {
  const res = await axios.get(url);
  return await res.data as Array<IAsset>;
}