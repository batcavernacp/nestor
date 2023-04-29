import { IEntityBase } from '../../common/entity/entity-base.interface';

export interface IVendedor extends IEntityBase {
  codigo: number;
  nome: string;
}
