import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../base.model';
import { IOrdemProducao } from './ordemProducao.interface';
import { IBobina } from '../bobina/bobina.interface';
import { BobinaModel } from '../bobina/bobina.model';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { IVendedor } from '../vendedor/vendedor.interface';
import { VendedorModel } from '../vendedor/vendedor.model';
import { ClienteModel } from '../cliente/cliente.model';
import { MovimentoModel } from '../movimento/movimento.model';
import { IPedido } from '../pedido/pedido.interface';
import { PedidoModel } from '../pedido/pedido.model';

@Entity()
export class OrdemProducaoModel extends BaseModel<OrdemProducaoModel> implements IOrdemProducao {
  @OneToMany(() => PedidoModel, pedido => pedido.ordemProducao)
  pedidos: IPedido[];
}
