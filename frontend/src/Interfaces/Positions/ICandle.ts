import IQuantity from "../IQuantity";

export interface ICandle {
  open: IQuantity,
  high: IQuantity,
  low: IQuantity,
  close: IQuantity,
  time: Date,
}