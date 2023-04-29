import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IEntrada } from './entrada.interface';
import { IJumbo } from '../jumbo/jumbo.interface';
import { JumboEntity } from '../jumbo/jumbo.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'entradas' })
@ObjectType('Entrada')
export class EntradaEntity extends EntityBaseModel<EntradaEntity> implements IEntrada {
  @ManyToOne(() => JumboEntity, { eager: true })
  @JoinColumn()
  @Field(() => JumboEntity)
  jumbo: IJumbo;

  @Column('int')
  @Field()
  quantidade: number;
}
