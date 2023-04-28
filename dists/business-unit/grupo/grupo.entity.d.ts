import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IGrupo } from './grupo.interface';
export declare class GrupoEntity extends EntityBaseModel<GrupoEntity> implements IGrupo {
    codigo: string;
    nome: string;
}
