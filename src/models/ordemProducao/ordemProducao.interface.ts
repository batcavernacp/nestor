import { IBaseModel } from "../base.interface";
import { IPedido } from "../pedido/pedido.interface";

export interface IOrdemProducao extends IBaseModel {
  pedidos: IPedido[];
}
