import IQuantity from "./IQuantity";

export interface IPortfolioTotal {
  totalAmountShares: IQuantity,
  totalAmountBonds: IQuantity,
  totalAmountEtf: IQuantity,
  totalAmountCurrencies: IQuantity,
  totalAmountFutures: IQuantity,
  expectedYield: IQuantity,
}