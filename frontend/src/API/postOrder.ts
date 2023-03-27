import axios from "axios"

export async function postOrder(figi: string, direction: "buy"|"sell", price: number, quantity: number) {
  const res = await axios.get('/api/assets/buy/'+figi+"/"+direction+"/"+price.toString()+"/"+quantity.toString())
  return res
}