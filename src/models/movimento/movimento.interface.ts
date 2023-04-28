import { IBaseModel } from "../base.interface";
import { IBobina } from "../bobina/bobina.interface";
import { IPedido } from "../pedido/pedido.interface";

export interface IMovimento extends IBaseModel {
  bobina: IBobina;
  quantidade: number;
  pedido: IPedido;
}
