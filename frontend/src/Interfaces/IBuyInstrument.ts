import IQuanity from "./IQuanity";

export interface IBuyInstrument {
  figi: string,
  ticker: string,
  currency: string,
  name: string,
  lot: number,
  sell_available_flag: boolean,
  buy_available_flag: boolean,
  nominal?: IQuanity
}