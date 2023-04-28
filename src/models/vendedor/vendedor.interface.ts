import { IBaseModel } from "../base.interface";

export interface IVendedor extends IBaseModel {
  codigo: string;
  nome: string;
}
