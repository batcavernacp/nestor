import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IMovimento } from './movimento.interface';
import { IBobina } from '../bobina/bobina.interface';
import { BobinaEntity } from '../bobina/bobina.entity';
import { IPedido } from '../pedido/pedido.interface';
import { PedidoEntity } from '../pedido/pedido.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'movimentos' })
@ObjectType('Movimento')
export class MovimentoEntity extends EntityBaseModel<MovimentoEntity> implements IMovimento {
  @ManyToOne(() => BobinaEntity)
  @JoinColumn({ name: 'bobina_id' })
  @Field(() => BobinaEntity)
  bobina: IBobina;

  @Column('text')
  bobina_id: string;

  @Column('int')
  @Field()
  quantidade: number;

  @ManyToOne(() => PedidoEntity)
  @JoinColumn({ name: 'pedido_id' })
  @Field(() => PedidoEntity)
  pedido: IPedido;

  @Column('text')
  pedido_id: string;
}
