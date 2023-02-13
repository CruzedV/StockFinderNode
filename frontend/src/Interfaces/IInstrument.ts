
export interface IInstrument{
    averagePositionPrice: IQuanity,
    averagePositionPriceFifo: IQuanity,
    averagePositionPricePt: IQuanity,
    blocked: boolean,
    currentPrice: IQuanity,
    expectedYield: IQuanity,
    figi: string,
    instrumentType: string,
    quanity: IQuanity,
    quantityLots: IQuanity;
};

interface IQuanity {
    currency?: string,
    nano: number,
    units: number;
};