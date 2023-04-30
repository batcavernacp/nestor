import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IBobina } from './bobina.interface';
import { JumboEntity } from '../jumbo/jumbo.entity';
import { IJumbo } from '../jumbo/jumbo.interface';
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

  @ManyToOne(() => JumboEntity)
  @JoinColumn({ name: 'jumbo_id' })
  @Field(() => JumboEntity)
  jumbo: IJumbo;

  @Column('text')
  jumbo_id: string;

  @Field()
  codigoBarra: string;
}
