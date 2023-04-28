import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseModel } from '../base.model';
import { IEntrada } from './entrada.interface';
import { IJumbo } from '../jumbo/jumbo.interface';
import { JumboModel } from '../jumbo/jumbo.model';

@Entity()
export class EntradaModel extends BaseModel<EntradaModel> implements IEntrada {
  @ManyToOne(() => JumboModel)
  jumbo: IJumbo;

  @Column('int')
  quantidade: number;
}
