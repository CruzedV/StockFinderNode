import axios from "axios"
// Get
// export async function postOrder(figi: string, direction: "buy"|"sell", price: number, quantity: number) {
//   const res = await axios.get('/api/assets/buy/'+figi+"/"+direction+"/"+price.toString()+"/"+quantity.toString())
//   return await res;
// }

// Post
export async function postOrder(figi: string, direction: "buy"|"sell", price: number, quantity: number) {
  axios.post('/api/assets/buy/'+figi+"/"+direction+"/"+price.toString()+"/"+quantity.toString(), {
    figi: figi,
    direction: direction,
    price: price,
    quantity: quantity,
  })
  .then(function (response) {
    console.log(response) 
  })
}