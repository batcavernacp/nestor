import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFornecedor } from './fornecedor.interface';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'fornecedores' })
@ObjectType()
export class FornecedorEntity extends EntityBaseModel<FornecedorEntity> implements IFornecedor {
  @Column('int')
  @Field()
  codigo: number;

  @Column('text')
  @Field()
  nome: string;
}
