import IQuantity from "./IQuantity";

export interface IPostOrder {
  figi: string,
  accountId: number,
  direction: "buy" | "sell",
  orderType: string,
  price: IQuantity,
  orderId: string,
  quantity: number,
}