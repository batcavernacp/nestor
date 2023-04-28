import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFornecedor } from './fornecedor.interface';
export declare class FornecedorEntity extends EntityBaseModel<FornecedorEntity> implements IFornecedor {
    codigo: string;
    nome: string;
}
