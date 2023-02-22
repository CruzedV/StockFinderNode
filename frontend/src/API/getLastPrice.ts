import axios from "axios"

export async function getLastPrice(url:string) {
  const res = await axios.get(url);
  return res.data.price.units+(res.data.price.nano/(Math.pow(10, 9)))
}