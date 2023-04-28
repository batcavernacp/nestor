import { IEntityBase } from '../../common/entity/entity-base.interface';
import { IPedido } from '../pedido/pedido.interface';
export interface IOrdemProducao extends IEntityBase {
    pedidos: IPedido[];
}
