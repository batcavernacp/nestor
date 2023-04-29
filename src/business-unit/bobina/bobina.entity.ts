import { Entity, Column, VirtualColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IBobina } from './bobina.interface';
import { JumboEntity } from '../jumbo/jumbo.entity';
import { IJumbo } from '../jumbo/jumbo.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Field, ObjectType } from '@nestjs/graphql';
@Entity({ name: 'bobinas' })
@ObjectType('Bobina')
export class BobinaEntity extends EntityBaseModel<BobinaEntity> implements IBobina {
  @Column('int')
  @Field()
  largura: number;

  @Column('int')
  @Field()
  comprimento: number;

  @ManyToOne(() => JumboEntity, { eager: true })
  @JoinColumn()
  @Field(() => JumboEntity)
  jumbo: IJumbo;

  @Field()
  @VirtualColumn({ query: () => 'SELECT CONCAT(largura) FROM bobinas', type: 'text' })
  codigoBarra: string;
}
