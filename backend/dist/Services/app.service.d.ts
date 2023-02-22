export declare class AppService {
    getPortfolio(): Promise<object>;
    getShares(): Promise<object>;
    getBonds(): Promise<object>;
    getCurrency(): Promise<object>;
    getETF(): Promise<object>;
    getByFigi(figi: string): Promise<object>;
    getCandles(figi: string): Promise<object>;
    getLastPrice(figi: string): Promise<object>;
}
