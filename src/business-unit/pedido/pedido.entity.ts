import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
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

@Entity({ name: 'pedidos' })
export class PedidoEntity extends EntityBaseModel<PedidoEntity> implements IPedido {
  @Column('int')
  sequencia: number;

  @ManyToOne(() => VendedorEntity)
  vendedor: IVendedor;

  @ManyToOne(() => ClienteEntity)
  cliente: ICliente;

  @OneToMany(() => MovimentoEntity, (movimento) => movimento.pedido)
  movimentos: IMovimento[];

  @ManyToOne(() => OrdemProducaoEntity, { nullable: true })
  ordemProducao: IOrdemProducao;
}
