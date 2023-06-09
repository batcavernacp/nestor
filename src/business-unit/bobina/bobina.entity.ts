import { Entity, Column, VirtualColumn, ManyToOne } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IBobina } from './bobina.interface';
import { JumboEntity } from '../jumbo/jumbo.entity';
import { IJumbo } from '../jumbo/jumbo.interface';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'bobinas' })
export class BobinaEntity extends EntityBaseModel<BobinaEntity> implements IBobina {
  @Column('int')
  @ApiProperty()
  largura: number;

  @Column('int')
  @ApiProperty()
  comprimento: number;

  @ManyToOne(() => JumboEntity)
  @ApiProperty({ type: () => JumboEntity })
  jumbo: IJumbo;

  @ApiProperty()
  @VirtualColumn({ query: () => 'SELECT CONCAT(largura) FROM bobinas', type: 'text' })
  codigoBarra: string;
}
