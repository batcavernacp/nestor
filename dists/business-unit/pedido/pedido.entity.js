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
exports.PedidoEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_base_model_1 = require("../../common/entity/entity-base.model");
const vendedor_entity_1 = require("../vendedor/vendedor.entity");
const cliente_entity_1 = require("../cliente/cliente.entity");
const movimento_entity_1 = require("../movimento/movimento.entity");
const ordem_producao_entity_1 = require("../ordem-producao/ordem-producao.entity");
let PedidoEntity = class PedidoEntity extends entity_base_model_1.EntityBaseModel {
};
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "sequencia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendedor_entity_1.VendedorEntity),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "vendedor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.ClienteEntity),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movimento_entity_1.MovimentoEntity, (movimento) => movimento.pedido),
    __metadata("design:type", Array)
], PedidoEntity.prototype, "movimentos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ordem_producao_entity_1.OrdemProducaoEntity, { nullable: true }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "ordemProducao", void 0);
PedidoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pedidos' })
], PedidoEntity);
exports.PedidoEntity = PedidoEntity;
//# sourceMappingURL=pedido.entity.js.map