import { Injectable } from '@nestjs/common';
import { api } from '../api';

@Injectable()
export class AppService {
  async getPortfolio(): Promise<object> {
    const { accounts } = await api.users.getAccounts({});
    const portfolio = await api.operations.getPortfolio({
      accountId: accounts[0].id,
    });
    return accounts[0].id, portfolio;
  }
  async getShares(): Promise<object> {
    const shares = await api.instruments.shares({ instrumentStatus: 1 });
    return shares.instruments.filter((i) => i.countryOfRisk === 'RU');
  }
  async getBonds(): Promise<object> {
    const resp = await api.instruments.bonds({ instrumentStatus: 1 });
    return resp.instruments.filter((i) => i.countryOfRisk === 'RU');
  }
  async getCurrency(): Promise<object> {
    const resp = await api.instruments.currencies({ instrumentStatus: 1 });
    return resp.instruments;
  }
  async getETF(): Promise<object> {
    const resp = await api.instruments.etfs({ instrumentStatus: 1 });
    return resp.instruments.filter((i) => i.countryOfRisk === 'RU');
  }
  async getByFigi(figi: string): Promise<object> {
    const resp = await api.instruments.getInstrumentBy({
      idType: 1,
      id: figi,
      classCode: '',
    });
    return resp;
  }
  async getCandles(figi: string, from: string, to: string): Promise<object> {
    const resp = await api.marketdata.getCandles({
      figi: figi,
      from: new Date(from.slice(0, 10)),
      to: new Date(to.slice(0, 10)),
      interval: 5,
    });
    return resp;
  }
  async getLastPrice(figi: string): Promise<object> {
    const resp = await api.marketdata.getLastPrices({
      figi: [figi],
    });
    return resp.lastPrices[0];
  }
  async getInstrument(query: string): Promise<object> {
    const resp = await api.instruments.findInstrument({
      query: query,
    });
    return resp;
  }
  async postOrder(
    figi: string,
    direction: 'buy' | 'sell',
    price: number,
    quantity: number,
  ): Promise<object> {
    console.log(figi, direction, price, quantity);
    const resp = await api.orders.postOrder({
      figi: figi,
      accountId: api.users.getAccounts({})[0],
      direction: direction === 'buy' ? 1 : 2,
      orderType: 1,
      price: api.helpers.toQuotation(6.49),
      orderId: Date.now().toString(),
      quantity: quantity,
    });
    return resp;
  }
}
