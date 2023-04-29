import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IGrupo } from './grupo.interface';

@Entity({ name: 'grupos' })
export class GrupoEntity extends EntityBaseModel<GrupoEntity> implements IGrupo {
  @Column('int')
  codigo: number;

  @Column('text')
  nome: string;
}
