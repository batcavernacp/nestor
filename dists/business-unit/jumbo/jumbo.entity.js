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
exports.JumboEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_base_model_1 = require("../../common/entity/entity-base.model");
const familia_entity_1 = require("../familia/familia.entity");
const grupo_entity_1 = require("../grupo/grupo.entity");
const fornecedor_entity_1 = require("../fornecedor/fornecedor.entity");
let JumboEntity = class JumboEntity extends entity_base_model_1.EntityBaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], JumboEntity.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], JumboEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], JumboEntity.prototype, "referencia", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], JumboEntity.prototype, "comprimento", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], JumboEntity.prototype, "largura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => familia_entity_1.FamiliaEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], JumboEntity.prototype, "familia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grupo_entity_1.GrupoEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], JumboEntity.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => fornecedor_entity_1.FornecedorEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], JumboEntity.prototype, "fornecedores", void 0);
JumboEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'jumbos' })
], JumboEntity);
exports.JumboEntity = JumboEntity;
//# sourceMappingURL=jumbo.entity.js.map