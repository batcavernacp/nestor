import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFamilia } from './familia.interface';

@Entity({ name: 'familias' })
export class FamiliaEntity extends EntityBaseModel<FamiliaEntity> implements IFamilia {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
