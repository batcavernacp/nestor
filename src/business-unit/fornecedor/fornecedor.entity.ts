import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFornecedor } from './fornecedor.interface';

@Entity({ name: 'fornecedores' })
export class FornecedorEntity extends EntityBaseModel<FornecedorEntity> implements IFornecedor {
  @Column('int')
  codigo: number;

  @Column('text')
  nome: string;
}
