import { TinkoffInvestApi } from 'tinkoff-invest-api';
import * as dotenv from 'dotenv';
dotenv.config();

export const api = new TinkoffInvestApi({
  token: process.env.TOKEN,
});
