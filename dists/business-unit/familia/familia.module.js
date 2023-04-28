"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamiliaModule = void 0;
const common_1 = require("@nestjs/common");
const familia_controller_1 = require("./familia.controller");
const familia_service_1 = require("./familia.service");
const typeorm_1 = require("@nestjs/typeorm");
const familia_entity_1 = require("./familia.entity");
let FamiliaModule = class FamiliaModule {
};
FamiliaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([familia_entity_1.FamiliaEntity])],
        controllers: [familia_controller_1.FamiliaController],
        providers: [familia_service_1.FamiliaService],
    })
], FamiliaModule);
exports.FamiliaModule = FamiliaModule;
//# sourceMappingURL=familia.module.js.map