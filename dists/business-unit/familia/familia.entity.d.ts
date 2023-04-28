import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFamilia } from './familia.interface';
export declare class FamiliaEntity extends EntityBaseModel<FamiliaEntity> implements IFamilia {
    codigo: string;
    nome: string;
}
