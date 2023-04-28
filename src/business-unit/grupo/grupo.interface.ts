import { IEntityBase } from '../../common/entity/entity-base.interface';

export interface IGrupo extends IEntityBase {
  codigo: string;
  nome: string;
}
