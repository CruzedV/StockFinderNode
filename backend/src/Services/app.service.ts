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
}
