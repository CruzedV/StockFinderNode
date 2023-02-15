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
}
