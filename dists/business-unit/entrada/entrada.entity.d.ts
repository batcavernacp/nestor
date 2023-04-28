import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IEntrada } from './entrada.interface';
import { IJumbo } from '../jumbo/jumbo.interface';
export declare class EntradaEntity extends EntityBaseModel<EntradaEntity> implements IEntrada {
    jumbo: IJumbo;
    quantidade: number;
}
