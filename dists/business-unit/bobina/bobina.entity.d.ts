import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IBobina } from './bobina.interface';
import { IJumbo } from '../jumbo/jumbo.interface';
export declare class BobinaEntity extends EntityBaseModel<BobinaEntity> implements IBobina {
    largura: number;
    comprimento: number;
    jumbo: IJumbo;
    codigoBarra: string;
}
