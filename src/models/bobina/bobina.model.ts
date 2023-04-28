import { Entity, Column, VirtualColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../base.model';
import { IBobina } from './bobina.interface';
import { JumboModel } from '../jumbo/jumbo.model';
import { IJumbo } from '../jumbo/jumbo.interface';

@Entity()
export class BobinaModel extends BaseModel<BobinaModel> implements IBobina {
  @Column('int')
  largura: number;

  @Column('int')
  comprimento: number;

  @ManyToOne(() => JumboModel)
  jumbo: IJumbo;

  @VirtualColumn({ query: () => 'SELECT CONCAT(largura, "1") FROM bobina', type: 'text' })
  codigoBarra: string;
}
