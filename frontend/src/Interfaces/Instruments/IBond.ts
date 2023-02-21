import IQuanity from "../IQuanity";

export interface IBond {
  figi: string,
  ticker: string,
  currency: string,
  name: string,
  lot: number,
  divYieldFlag: boolean,
  sell_available_flag: boolean,
  buy_available_flag: boolean,
  nominal: IQuanity,
}