"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BobinaModule = void 0;
const common_1 = require("@nestjs/common");
const bobina_service_1 = require("./bobina.service");
const bobina_controller_1 = require("./bobina.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bobina_entity_1 = require("./bobina.entity");
let BobinaModule = class BobinaModule {
};
BobinaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bobina_entity_1.BobinaEntity])],
        controllers: [bobina_controller_1.BobinaController],
        providers: [bobina_service_1.BobinaService],
    })
], BobinaModule);
exports.BobinaModule = BobinaModule;
//# sourceMappingURL=bobina.module.js.map