import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../base.model';
import { IPedido } from './pedido.interface';
import { IBobina } from '../bobina/bobina.interface';
import { BobinaModel } from '../bobina/bobina.model';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { IVendedor } from '../vendedor/vendedor.interface';
import { VendedorModel } from '../vendedor/vendedor.model';
import { ClienteModel } from '../cliente/cliente.model';
import { MovimentoModel } from '../movimento/movimento.model';
import { IOrdemProducao } from '../ordemProducao/ordemProducao.interface';
import { OrdemProducaoModel } from '../ordemProducao/ordemProducao.model';

@Entity()
export class PedidoModel extends BaseModel<PedidoModel> implements IPedido {
  @Column('int')
  sequencia: number;

  @ManyToOne(() => VendedorModel)
  vendedor: IVendedor;

  @ManyToOne(() => ClienteModel)
  cliente: ICliente;

  @OneToMany(() => MovimentoModel, movimento => movimento.pedido)
  movimentos: IMovimento[];

  @ManyToOne(() => OrdemProducaoModel, { nullable: true })
  ordemProducao: IOrdemProducao;

}
