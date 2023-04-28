import { Entity, Column } from 'typeorm';
import { BaseModel } from '../base.model';
import { ICliente } from './cliente.interface';

@Entity()
export class ClienteModel extends BaseModel<ClienteModel> implements ICliente {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
