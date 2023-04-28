import { IEntityBase } from '../../common/entity/entity-base.interface';
import { IJumbo } from '../jumbo/jumbo.interface';

export interface IEntrada extends IEntityBase {
  jumbo: IJumbo;
  quantidade: number;
}
