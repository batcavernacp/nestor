import { Entity, Column, VirtualColumn, ManyToOne } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IBobina } from './bobina.interface';
import { JumboEntity } from '../jumbo/jumbo.entity';
import { IJumbo } from '../jumbo/jumbo.interface';

@Entity({ name: 'bobinas' })
export class BobinaEntity extends EntityBaseModel<BobinaEntity> implements IBobina {
  @Column('int')
  largura: number;

  @Column('int')
  comprimento: number;

  @ManyToOne(() => JumboEntity)
  jumbo: IJumbo;

  @VirtualColumn({ query: () => 'SELECT CONCAT(largura, "1") FROM bobina', type: 'text' })
  codigoBarra: string;
}
