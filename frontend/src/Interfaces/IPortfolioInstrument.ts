import IQuanity from "./IQuanity";

export interface IPortfolioInstrument {
    averagePositionPrice: IQuanity,
    averagePositionPriceFifo: IQuanity,
    averagePositionPricePt: IQuanity,
    blocked: boolean,
    currentPrice: IQuanity,
    expectedYield: IQuanity,
    figi: string,
    instrumentType: string,
    quantity: IQuanity,
    quantityLots: IQuanity;
};