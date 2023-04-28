import { IBaseModel } from "../base.interface";

export interface ICliente extends IBaseModel {
  codigo: string;
  nome: string;
}
