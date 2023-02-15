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
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map