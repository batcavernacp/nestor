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
exports.FornecedorEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_base_model_1 = require("../../common/entity/entity-base.model");
let FornecedorEntity = class FornecedorEntity extends entity_base_model_1.EntityBaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], FornecedorEntity.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], FornecedorEntity.prototype, "nome", void 0);
FornecedorEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'fornecedores' })
], FornecedorEntity);
exports.FornecedorEntity = FornecedorEntity;
//# sourceMappingURL=fornecedor.entity.js.map