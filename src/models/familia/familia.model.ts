import { Entity, Column } from 'typeorm';
import { BaseModel } from '../base.model';
import { IFamilia } from './familia.interface';

@Entity()
export class FamiliaModel extends BaseModel<FamiliaModel> implements IFamilia {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;
}
