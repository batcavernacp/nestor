import { IEntityBase } from '../../common/entity/entity-base.interface';

export interface IFornecedor extends IEntityBase {
  codigo: number;
  nome: string;
}
