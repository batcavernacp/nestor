import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IVendedor } from './vendedor.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'vendedores' })
export class VendedorEntity extends EntityBaseModel<VendedorEntity> implements IVendedor {
  @Column('int')
  @ApiProperty()
  @IsNotEmpty()
  codigo: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column('text')
  nome: string;
}
