import axios from "axios"

export async function getCandles(url:string) {
  const res = await axios.get(url);
  return res.data
}