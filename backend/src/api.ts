import { TinkoffInvestApi } from 'tinkoff-invest-api';
import { TinkoffAccount, RealAccount } from 'tinkoff-invest-api';

export const api = new TinkoffInvestApi({
  token:
    't.u3YwK34YEudgNQc0qNakfp6HzBlwGbkaXG-3D13Jy-wXhardL5w0llklkIbP9JWuc-hgVTf0l-Oxf0ZxEgT7hw',
});

// const account = await (
//   await api.users.getAccounts({})
// ).accounts.filter((it) => it.name === 'ИИС')[0];

// export const accountIIS: TinkoffAccount = new RealAccount(api, account.id);
