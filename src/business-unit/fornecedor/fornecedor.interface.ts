import { IEntityBase } from '../../common/entity/entity-base.interface';
import { IJumbo } from '../jumbo/jumbo.interface';

export interface IFornecedor extends IEntityBase {
  codigo: string;
  nome: string;
}
