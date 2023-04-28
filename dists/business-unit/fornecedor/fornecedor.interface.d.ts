import { IEntityBase } from '../../common/entity/entity-base.interface';
export interface IFornecedor extends IEntityBase {
    codigo: string;
    nome: string;
}
