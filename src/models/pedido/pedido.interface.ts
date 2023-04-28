import { IBaseModel } from "../base.interface";
import { ICliente } from "../cliente/cliente.interface";
import { IMovimento } from "../movimento/movimento.interface";
import { IOrdemProducao } from "../ordemProducao/ordemProducao.interface";
import { IVendedor } from "../vendedor/vendedor.interface";

export interface IPedido extends IBaseModel {
  sequencia: number;
  vendedor: IVendedor;
  cliente: ICliente;
  movimentos: IMovimento[];
  ordemProducao: IOrdemProducao;
}
