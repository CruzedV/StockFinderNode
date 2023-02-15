import { Controller, Get } from '@nestjs/common';
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
}
