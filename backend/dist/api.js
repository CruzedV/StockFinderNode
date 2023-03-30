"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = exports.api = void 0;
const tinkoff_invest_api_1 = require("tinkoff-invest-api");
const tinkoff_invest_api_2 = require("tinkoff-invest-api");
exports.api = new tinkoff_invest_api_1.TinkoffInvestApi({
    token: 't.swY2yY7tmtexczUnGgN0FAHweAfIji4unGwmDg4NuMugn-t8QjV_u8O3az0h_CuUGEvg0b1HjCA6o7M6G9TRhg',
});
exports.account = new tinkoff_invest_api_2.RealAccount(exports.api, '<real-account-id>');
//# sourceMappingURL=api.js.map