"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../Services/app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getPortfolio() {
        return this.appService.getPortfolio();
    }
    getShares() {
        return this.appService.getShares();
    }
    getBonds() {
        return this.appService.getBonds();
    }
    getCurrency() {
        return this.appService.getCurrency();
    }
    getETF() {
        return this.appService.getETF();
    }
    getByFigi(figi) {
        return this.appService.getByFigi(figi);
    }
    getCandles(figi, from, to) {
        return this.appService.getCandles(figi, from, to);
    }
    getLastPrice(figi) {
        return this.appService.getLastPrice(figi);
    }
    getInstrument(query) {
        return this.appService.getInstrument(query);
    }
    postOrder(figi, direction, price, quantity) {
        return this.appService.postOrder(figi, direction, price, quantity);
    }
};
__decorate([
    (0, common_1.Get)('/user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPortfolio", null);
__decorate([
    (0, common_1.Get)('/assets/shares'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getShares", null);
__decorate([
    (0, common_1.Get)('/assets/bonds'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getBonds", null);
__decorate([
    (0, common_1.Get)('/assets/currency'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCurrency", null);
__decorate([
    (0, common_1.Get)('/assets/etf'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getETF", null);
__decorate([
    (0, common_1.Get)('/assets/:figi'),
    __param(0, (0, common_1.Param)('figi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getByFigi", null);
__decorate([
    (0, common_1.Get)('/assets/:figi/candles/:from/:to'),
    __param(0, (0, common_1.Param)('figi')),
    __param(1, (0, common_1.Param)('from')),
    __param(2, (0, common_1.Param)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCandles", null);
__decorate([
    (0, common_1.Get)('/assets/:figi/lastprice'),
    __param(0, (0, common_1.Param)('figi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getLastPrice", null);
__decorate([
    (0, common_1.Get)('/assets/find/:query'),
    __param(0, (0, common_1.Param)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getInstrument", null);
__decorate([
    (0, common_1.Post)('/assets/order/:figi/:direction/:price/:quantity'),
    __param(0, (0, common_1.Param)('figi')),
    __param(1, (0, common_1.Param)('direction')),
    __param(2, (0, common_1.Param)('price')),
    __param(3, (0, common_1.Param)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "postOrder", null);
AppController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map