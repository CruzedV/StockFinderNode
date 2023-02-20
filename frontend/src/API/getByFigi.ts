import axios from "axios"

export async function getByFigi(url:string) {
  const res = await axios.get(url);
  return res.data.instrument
}