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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Park = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Park = class Park extends sequelize_typescript_1.Model {
};
exports.Park = Park;
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Park.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Park.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Park.prototype, "age", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Park.prototype, "health", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Park.prototype, "hungry", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Park.prototype, "mood", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Park.prototype, "status", void 0);
exports.Park = Park = __decorate([
    sequelize_typescript_1.Table
], Park);
//# sourceMappingURL=park.model.js.map