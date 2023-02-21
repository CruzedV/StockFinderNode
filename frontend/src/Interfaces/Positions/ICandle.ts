import IQuanity from "../IQuanity";

export interface ICandle {
  open: IQuanity,
  high: IQuanity,
  low: IQuanity,
  close: IQuanity,
  time: Date,
}