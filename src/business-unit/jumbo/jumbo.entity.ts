import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IJumbo } from './jumbo.interface';
import { IFamilia } from '../familia/familia.interface';
import { FamiliaEntity } from '../familia/familia.entity';
import { GrupoEntity } from '../grupo/grupo.entity';
import { IGrupo } from '../grupo/grupo.interface';
import { FornecedorEntity } from '../fornecedor/fornecedor.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IFornecedor } from '../fornecedor/fornecedor.interface';

@Entity({ name: 'jumbos' })
@ObjectType('Jumbo')
export class JumboEntity extends EntityBaseModel<JumboEntity> implements IJumbo {
  @Column('text')
  @Field()
  codigo: string;

  @Column('text')
  @Field()
  nome: string;

  @Column('int')
  @Field()
  referencia: number;

  @Column('int')
  @Field()
  comprimento: number;

  @Column('int')
  @Field()
  largura: number;

  @ManyToOne(() => FamiliaEntity)
  @JoinColumn({ name: 'familia_id' })
  @Field(() => FamiliaEntity)
  familia: IFamilia;

  @Column('text')
  familia_id: string;

  @ManyToOne(() => GrupoEntity)
  @JoinColumn({ name: 'grupo_id' })
  @Field(() => GrupoEntity)
  grupo: IGrupo;

  @Column('text') //TODO
  grupo_id: string;

  @ManyToOne(() => FornecedorEntity)
  @JoinColumn({ name: 'fornecedor_id' })
  @Field(() => FornecedorEntity)
  fornecedor: IFornecedor;

  @Column('text') //TODO
  fornecedor_id: string;

  @Field()
  codigoBarra: string;
}
