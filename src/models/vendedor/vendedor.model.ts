import { Entity, Column } from 'typeorm';
import { BaseModel } from '../base.model';
import { IVendedor } from './vendedor.interface';

@Entity()
export class VendedorModel extends BaseModel<VendedorModel> implements IVendedor {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
