import { Injectable } from '@nestjs/common';
import { type } from 'os';
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
  async getAssets(): Promise<object> {
    const { assets } = await api.instruments.getAssets({});
    return assets.slice(0, 20);
  }
}
