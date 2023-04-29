import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFamilia } from './familia.interface';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'familias' })
@ObjectType({ description: 'familia ' })
export class FamiliaEntity extends EntityBaseModel<FamiliaEntity> implements IFamilia {
  @Column('int')
  @Field()
  codigo: number;

  @Field()
  @Column('text')
  nome: string;
}
