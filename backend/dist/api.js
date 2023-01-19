"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = exports.api = void 0;
const tinkoff_invest_api_1 = require("tinkoff-invest-api");
const tinkoff_invest_api_2 = require("tinkoff-invest-api");
exports.api = new tinkoff_invest_api_1.TinkoffInvestApi({
    token: 't.EfOlccsdCKP7y3TvsQDTXGv-4cqr84e7ADc_DNp3Fi_0jZP5e43ef3vWe1Bqki_qNmcKEWOmWAxnxWtBsNQOrQ',
});
exports.account = new tinkoff_invest_api_2.RealAccount(exports.api, '<real-account-id>');
//# sourceMappingURL=api.js.map