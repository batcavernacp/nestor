import { Entity, Column } from 'typeorm';
import { BaseModel } from '../base.model';
import { IFornecedor } from './fornecedor.interface';

@Entity()
export class FornecedorModel extends BaseModel<FornecedorModel> implements IFornecedor {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
