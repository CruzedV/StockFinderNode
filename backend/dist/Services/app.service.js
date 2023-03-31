"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("../api");
let AppService = class AppService {
    async getPortfolio() {
        const { accounts } = await api_1.api.users.getAccounts({});
        const portfolio = await api_1.api.operations.getPortfolio({
            accountId: accounts[0].id,
        });
        return accounts[0].id, portfolio;
    }
    async getShares() {
        const shares = await api_1.api.instruments.shares({ instrumentStatus: 1 });
        return shares.instruments.filter((i) => i.countryOfRisk === 'RU');
    }
    async getBonds() {
        const resp = await api_1.api.instruments.bonds({ instrumentStatus: 1 });
        return resp.instruments.filter((i) => i.countryOfRisk === 'RU');
    }
    async getCurrency() {
        const resp = await api_1.api.instruments.currencies({ instrumentStatus: 1 });
        return resp.instruments;
    }
    async getETF() {
        const resp = await api_1.api.instruments.etfs({ instrumentStatus: 1 });
        return resp.instruments.filter((i) => i.countryOfRisk === 'RU');
    }
    async getByFigi(figi) {
        const resp = await api_1.api.instruments.getInstrumentBy({
            idType: 1,
            id: figi,
            classCode: '',
        });
        return resp;
    }
    async getCandles(figi, from, to) {
        const resp = await api_1.api.marketdata.getCandles({
            figi: figi,
            from: new Date(from.slice(0, 10)),
            to: new Date(to.slice(0, 10)),
            interval: 5,
        });
        return resp;
    }
    async getLastPrice(figi) {
        const resp = await api_1.api.marketdata.getLastPrices({
            figi: [figi],
        });
        return resp.lastPrices[0];
    }
    async getInstrument(query) {
        const resp = await api_1.api.instruments.findInstrument({
            query: query,
        });
        return resp;
    }
    async postOrder(figi, direction, price, quantity) {
        console.log(figi, direction, price, quantity);
        const resp = await api_1.api.orders.postOrder({
            figi: figi,
            accountId: api_1.api.users.getAccounts({})[0],
            direction: direction === 'buy' ? 1 : 2,
            orderType: 1,
            price: api_1.api.helpers.toQuotation(6.49),
            orderId: Date.now().toString(),
            quantity: quantity,
        });
        return resp;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map