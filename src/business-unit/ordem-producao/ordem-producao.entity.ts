import { Entity, OneToMany } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IOrdemProducao } from './ordem-producao.interface';
import { IPedido } from '../pedido/pedido.interface';
import { PedidoEntity } from '../pedido/pedido.entity';

@Entity({ name: 'ordensProducao' })
export class OrdemProducaoEntity
  extends EntityBaseModel<OrdemProducaoEntity>
  implements IOrdemProducao
{
  @OneToMany(() => PedidoEntity, (pedido) => pedido.ordemProducao)
  pedidos: IPedido[];
}
