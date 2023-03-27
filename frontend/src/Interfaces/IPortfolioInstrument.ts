import IQuantity from "./IQuantity";

export interface IPortfolioInstrument {
    averagePositionPrice: IQuantity,
    averagePositionPriceFifo: IQuantity,
    averagePositionPricePt: IQuantity,
    blocked: boolean,
    currentPrice: IQuantity,
    expectedYield: IQuantity,
    figi: string,
    instrumentType: string,
    quantity: IQuantity,
    quantityLots: IQuantity;
};