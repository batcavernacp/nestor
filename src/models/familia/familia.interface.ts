import { IBaseModel } from '../base.interface';
import { IJumbo } from '../jumbo/jumbo.interface';

export interface IFamilia extends IBaseModel {
  codigo: string;
  nome: string;
}
