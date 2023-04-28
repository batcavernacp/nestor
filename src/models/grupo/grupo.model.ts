import { Entity, Column } from 'typeorm';
import { BaseModel } from '../base.model';
import { IGrupo } from './grupo.interface';

@Entity()
export class GrupoModel extends BaseModel<GrupoModel> implements IGrupo {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
