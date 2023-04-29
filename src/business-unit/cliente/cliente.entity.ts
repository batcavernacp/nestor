import { Entity, Column } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { ICliente } from './cliente.interface';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'clientes' })
@ObjectType('Cliente')
export class ClienteEntity extends EntityBaseModel<ClienteEntity> implements ICliente {
  @Column('int')
  @Field()
  codigo: number;

  @Column('text')
  @Field()
  nome: string;
}
