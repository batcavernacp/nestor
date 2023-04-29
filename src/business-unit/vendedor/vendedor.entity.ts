import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IVendedor } from './vendedor.interface';

@Entity({ name: 'vendedores' })
export class VendedorEntity extends EntityBaseModel<VendedorEntity> implements IVendedor {
  @Column('int')
  codigo: number;

  @Column('text')
  nome: string;
}
