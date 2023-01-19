import { TinkoffInvestApi } from 'tinkoff-invest-api';
import { TinkoffAccount, RealAccount } from 'tinkoff-invest-api';

export const api = new TinkoffInvestApi({
  token:
    't.EfOlccsdCKP7y3TvsQDTXGv-4cqr84e7ADc_DNp3Fi_0jZP5e43ef3vWe1Bqki_qNmcKEWOmWAxnxWtBsNQOrQ',
});

export const account: TinkoffAccount = new RealAccount(
  api,
  '<real-account-id>',
);
