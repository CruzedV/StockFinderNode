import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../Services/app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/user')
  getPortfolio(): Promise<object> {
    return this.appService.getPortfolio();
  }
  @Get('/assets/shares')
  getShares(): Promise<object> {
    return this.appService.getShares();
  }
  @Get('/assets/bonds')
  getBonds(): Promise<object> {
    return this.appService.getBonds();
  }
  @Get('/assets/currency')
  getCurrency(): Promise<object> {
    return this.appService.getCurrency();
  }
  @Get('/assets/etf')
  getETF(): Promise<object> {
    return this.appService.getETF();
  }
  @Get('/assets/:figi')
  getByFigi(@Param('figi') figi: string): Promise<object> {
    return this.appService.getByFigi(figi);
  }
  @Get('/assets/:figi/candles')
  getCandles(@Param('figi') figi: string): Promise<object> {
    return this.appService.getCandles(figi);
  }
  @Get('/assets/:figi/lastprice')
  getLastPrice(@Param('figi') figi: string): Promise<object> {
    return this.appService.getLastPrice(figi);
  }
}
