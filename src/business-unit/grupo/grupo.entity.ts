import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IGrupo } from './grupo.interface';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'grupos' })
@ObjectType('Grupo')
export class GrupoEntity extends EntityBaseModel<GrupoEntity> implements IGrupo {
  @Column('int')
  @Field()
  codigo: number;

  @Column('text')
  @Field()
  nome: string;
}
