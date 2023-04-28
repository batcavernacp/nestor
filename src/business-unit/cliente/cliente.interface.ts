import { IEntityBase } from '../../common/entity/entity-base.interface';

export interface ICliente extends IEntityBase {
  codigo: string;
  nome: string;
}
