import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IOrdemProducao } from './ordem-producao.interface';
import { IPedido } from '../pedido/pedido.interface';
export declare class OrdemProducaoEntity extends EntityBaseModel<OrdemProducaoEntity> implements IOrdemProducao {
    pedidos: IPedido[];
}
