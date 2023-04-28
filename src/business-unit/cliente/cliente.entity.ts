import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { ICliente } from './cliente.interface';

@Entity({ name: 'clientes' })
export class ClienteEntity extends EntityBaseModel<ClienteEntity> implements ICliente {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
