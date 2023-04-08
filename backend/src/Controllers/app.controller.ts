import { Controller, Get, Param, Post } from '@nestjs/common';
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
  @Get('/assets/:figi/candles/:from/:to')
  getCandles(
    @Param('figi') figi: string,
    @Param('from') from: string,
    @Param('to') to: string,
  ): Promise<object> {
    return this.appService.getCandles(figi, from, to);
  }
  @Get('/assets/:figi/lastprice')
  getLastPrice(@Param('figi') figi: string): Promise<object> {
    return this.appService.getLastPrice(figi);
  }
  @Get('/assets/find/:query')
  getInstrument(@Param('query') query: string): Promise<object> {
    return this.appService.getInstrument(query);
  }
  @Post('/assets/order/:figi/:direction/:price/:quantity')
  postOrder(
    @Param('figi') figi: string,
    @Param('direction') direction: 'buy' | 'sell',
    @Param('price') price: number,
    @Param('quantity') quantity: number,
  ): Promise<object> {
    return this.appService.postOrder(figi, direction, price, quantity);
  }
}
