import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseModel } from '../base.model';
import { IMovimento } from './movimento.interface';
import { IBobina } from '../bobina/bobina.interface';
import { BobinaModel } from '../bobina/bobina.model';
import { IPedido } from '../pedido/pedido.interface';
import { PedidoModel } from '../pedido/pedido.model';

@Entity()
export class MovimentoModel extends BaseModel<MovimentoModel> implements IMovimento {
  @ManyToOne(() => BobinaModel)
  bobina: IBobina;

  @Column('int')
  quantidade: number;

  @ManyToOne(() => PedidoModel)
  pedido: IPedido;
}
