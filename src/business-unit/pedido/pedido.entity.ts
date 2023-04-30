import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IPedido } from './pedido.interface';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { IVendedor } from '../vendedor/vendedor.interface';
import { VendedorEntity } from '../vendedor/vendedor.entity';
import { ClienteEntity } from '../cliente/cliente.entity';
import { MovimentoEntity } from '../movimento/movimento.entity';
import { IOrdemProducao } from '../ordem-producao/ordem-producao.interface';
import { OrdemProducaoEntity } from '../ordem-producao/ordem-producao.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'pedidos' })
@ObjectType('Pedido')
export class PedidoEntity extends EntityBaseModel<PedidoEntity> implements IPedido {
  @Column('int')
  @Field()
  sequencia: number;

  @ManyToOne(() => VendedorEntity)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => VendedorEntity)
  vendedor: IVendedor;

  @Column('text')
  vendedor_id: string;

  @ManyToOne(() => ClienteEntity)
  @JoinColumn({ name: 'cliente_id' })
  @Field(() => ClienteEntity)
  cliente: ICliente;

  @Column('text')
  cliente_id: string;

  @Field(() => [MovimentoEntity])
  @OneToMany(() => MovimentoEntity, (movimento) => movimento.pedido)
  movimentos: IMovimento[];

  @Field(() => OrdemProducaoEntity, { nullable: true })
  @ManyToOne(() => OrdemProducaoEntity, { nullable: true })
  @JoinColumn({ name: 'ordem_producao_id' })
  ordemProducao: IOrdemProducao;

  @Column('text', { nullable: true })
  ordem_producao_id: string;
}
