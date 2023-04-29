import { Column, Entity } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IVendedor } from './vendedor.interface';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'vendedores' })
@ObjectType('Vendedor')
export class VendedorEntity extends EntityBaseModel<VendedorEntity> implements IVendedor {
  @Column('int')
  @Field()
  codigo: number;

  @Field()
  @Column('text')
  nome: string;
}
