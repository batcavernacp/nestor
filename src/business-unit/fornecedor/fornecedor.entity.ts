import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFornecedor } from './fornecedor.interface';

@Entity({ name: 'fornecedores' })
export class FornecedorEntity extends EntityBaseModel<FornecedorEntity> implements IFornecedor {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
