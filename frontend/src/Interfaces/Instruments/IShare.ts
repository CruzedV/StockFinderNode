export interface IShare {
  figi: string,
  ticker: string,
  currency: string,
  name: string,
  lot: number,
  divYieldFlag: boolean,
  sell_available_flag: boolean,
  buy_available_flag: boolean,
}