import IQuanity from "./IQuanity";

export interface IInstrument {
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