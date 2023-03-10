import { AppService } from '../Services/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getPortfolio(): Promise<object>;
    getShares(): Promise<object>;
    getBonds(): Promise<object>;
    getCurrency(): Promise<object>;
    getETF(): Promise<object>;
    getByFigi(figi: string): Promise<object>;
    getCandles(figi: string, from: string, to: string): Promise<object>;
    getLastPrice(figi: string): Promise<object>;
    getInstrument(query: string): Promise<object>;
}
