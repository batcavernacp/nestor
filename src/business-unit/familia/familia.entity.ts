import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IFamilia } from './familia.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'familias' })
export class FamiliaEntity extends EntityBaseModel<FamiliaEntity> implements IFamilia {
  @Column('int')
  @ApiProperty()
  codigo: number;

  @ApiProperty()
  @Column('text')
  nome: string;
}
