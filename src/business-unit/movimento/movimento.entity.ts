import { Entity, Column, ManyToOne } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IMovimento } from './movimento.interface';
import { IBobina } from '../bobina/bobina.interface';
import { BobinaEntity } from '../bobina/bobina.entity';
import { IPedido } from '../pedido/pedido.interface';
import { PedidoEntity } from '../pedido/pedido.entity';

@Entity({ name: 'movimentos' })
export class MovimentoEntity extends EntityBaseModel<MovimentoEntity> implements IMovimento {
  @ManyToOne(() => BobinaEntity)
  bobina: IBobina;

  @Column('int')
  quantidade: number;

  @ManyToOne(() => PedidoEntity)
  pedido: IPedido;
}
