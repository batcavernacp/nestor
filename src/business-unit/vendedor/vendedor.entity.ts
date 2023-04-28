import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IVendedor } from './vendedor.interface';

@Entity({ name: 'vendedores' })
export class VendedorEntity extends EntityBaseModel<VendedorEntity> implements IVendedor {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
