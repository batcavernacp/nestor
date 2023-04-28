import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IVendedor } from './vendedor.interface';
export declare class VendedorEntity extends EntityBaseModel<VendedorEntity> implements IVendedor {
    codigo: string;
    nome: string;
}
