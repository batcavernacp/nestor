import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { ICliente } from './cliente.interface';
export declare class ClienteEntity extends EntityBaseModel<ClienteEntity> implements ICliente {
    codigo: string;
    nome: string;
}
