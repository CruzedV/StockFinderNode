export declare class AppService {
    getPortfolio(): Promise<object>;
    getShares(): Promise<object>;
    getBonds(): Promise<object>;
    getCurrency(): Promise<object>;
    getETF(): Promise<object>;
    getByFigi(figi: string): Promise<object>;
    getCandles(figi: string, from: string, to: string): Promise<object>;
    getLastPrice(figi: string): Promise<object>;
    getInstrument(query: string): Promise<object>;
    postOrder(figi: string, direction: 'buy' | 'sell', price: number, quantity: number): Promise<object>;
}
