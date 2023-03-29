import axios from "axios"
// Post
export async function postOrder(figi: string, direction: "buy"|"sell", price: number, quantity: number) {
  axios.post('/api/assets/order/'+figi+"/"+direction+"/"+price.toString()+"/"+quantity.toString(), {
    figi: figi,
    direction: direction,
    price: price,
    quantity: quantity,
  })
  .then(function (response) {
    console.log(response) 
  })
}