import IQuanity from "./IQuanity";

export interface IPortfolioTotal {
  totalAmountShares: IQuanity,
  totalAmountBonds: IQuanity,
  totalAmountEtf: IQuanity,
  totalAmountCurrencies: IQuanity,
  totalAmountFutures: IQuanity,
  expectedYield: IQuanity,
}