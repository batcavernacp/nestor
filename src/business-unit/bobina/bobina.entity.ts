import { Entity, Column, VirtualColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IBobina } from './bobina.interface';
import { JumboEntity } from '../jumbo/jumbo.entity';
import { IJumbo } from '../jumbo/jumbo.interface';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectType } from '@nestjs/graphql';
@Entity({ name: 'bobinas' })
@ObjectType('Bobina')
export class BobinaEntity extends EntityBaseModel<BobinaEntity> implements IBobina {
  @Column('int')
  @ApiProperty()
  largura: number;

  @Column('int')
  @ApiProperty()
  comprimento: number;

  @ManyToOne(() => JumboEntity, { eager: true })
  @JoinColumn()
  @ApiProperty({ type: () => JumboEntity })
  jumbo: IJumbo;

  @ApiProperty()
  @VirtualColumn({ query: () => 'SELECT CONCAT(largura) FROM bobinas', type: 'text' })
  codigoBarra: string;
}
