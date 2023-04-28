import { IEntityBase } from '../../common/entity/entity-base.interface';
import { IJumbo } from '../jumbo/jumbo.interface';

export interface IBobina extends IEntityBase {
  largura: number;
  comprimento: number;
  codigoBarra: string;
  jumbo: IJumbo;
}
