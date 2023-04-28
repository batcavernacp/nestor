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
exports.BobinaEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_base_model_1 = require("../../common/entity/entity-base.model");
const jumbo_entity_1 = require("../jumbo/jumbo.entity");
let BobinaEntity = class BobinaEntity extends entity_base_model_1.EntityBaseModel {
};
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], BobinaEntity.prototype, "largura", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], BobinaEntity.prototype, "comprimento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jumbo_entity_1.JumboEntity),
    __metadata("design:type", Object)
], BobinaEntity.prototype, "jumbo", void 0);
__decorate([
    (0, typeorm_1.VirtualColumn)({ query: () => 'SELECT CONCAT(largura, "1") FROM bobina', type: 'text' }),
    __metadata("design:type", String)
], BobinaEntity.prototype, "codigoBarra", void 0);
BobinaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'bobinas' })
], BobinaEntity);
exports.BobinaEntity = BobinaEntity;
//# sourceMappingURL=bobina.entity.js.map