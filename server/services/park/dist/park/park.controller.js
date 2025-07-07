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
exports.ParkController = void 0;
const common_1 = require("@nestjs/common");
const park_service_1 = require("./park.service");
const park_dto_1 = require("./dto/park.dto");
let ParkController = class ParkController {
    constructor(parkService) {
        this.parkService = parkService;
    }
    pets() {
        return this.parkService.findAll();
    }
    create_pet(data) {
        const dto = new park_dto_1.ParkDto();
        const { name, age, health, hungry, mood, status } = data;
        dto.name = name;
        dto.age = age;
        dto.health = health;
        dto.hungry = hungry;
        dto.mood = mood;
        dto.status = status;
        return this.parkService.create(dto);
    }
};
exports.ParkController = ParkController;
__decorate([
    (0, common_1.Get)("/pets"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParkController.prototype, "pets", null);
__decorate([
    (0, common_1.Post)("/create_pet"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParkController.prototype, "create_pet", null);
exports.ParkController = ParkController = __decorate([
    (0, common_1.Controller)("park"),
    __metadata("design:paramtypes", [park_service_1.ParkService])
], ParkController);
//# sourceMappingURL=park.controller.js.map