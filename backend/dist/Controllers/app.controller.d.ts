import { AppService } from '../Services/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getPortfolio(): Promise<object>;
    getShares(): Promise<object>;
}
