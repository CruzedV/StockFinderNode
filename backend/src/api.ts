import { TinkoffInvestApi } from 'tinkoff-invest-api';
import { TinkoffAccount, RealAccount } from 'tinkoff-invest-api';

export const api = new TinkoffInvestApi({
  token:
    // ReadOnly
    // 't.EfOlccsdCKP7y3TvsQDTXGv-4cqr84e7ADc_DNp3Fi_0jZP5e43ef3vWe1Bqki_qNmcKEWOmWAxnxWtBsNQOrQ',
    // FullAccess
    't.swY2yY7tmtexczUnGgN0FAHweAfIji4unGwmDg4NuMugn-t8QjV_u8O3az0h_CuUGEvg0b1HjCA6o7M6G9TRhg',
});

export const account: TinkoffAccount = new RealAccount(
  api,
  '<real-account-id>',
);
