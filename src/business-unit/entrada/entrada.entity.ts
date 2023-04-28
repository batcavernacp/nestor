import { Entity, Column, ManyToOne } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IEntrada } from './entrada.interface';
import { IJumbo } from '../jumbo/jumbo.interface';
import { JumboEntity } from '../jumbo/jumbo.entity';

@Entity({ name: 'entradas' })
export class EntradaEntity extends EntityBaseModel<EntradaEntity> implements IEntrada {
  @ManyToOne(() => JumboEntity)
  jumbo: IJumbo;

  @Column('int')
  quantidade: number;
}
