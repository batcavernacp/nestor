import { IBaseModel } from '../base.interface';
import { IJumbo } from '../jumbo/jumbo.interface';

export interface IFornecedor extends IBaseModel {
  codigo: string;
  nome: string;
}
