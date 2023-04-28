import { IEntityBase } from '../../common/entity/entity-base.interface';
import { IBobina } from '../bobina/bobina.interface';
import { IPedido } from '../pedido/pedido.interface';

export interface IMovimento extends IEntityBase {
  bobina: IBobina;
  quantidade: number;
  pedido: IPedido;
}
