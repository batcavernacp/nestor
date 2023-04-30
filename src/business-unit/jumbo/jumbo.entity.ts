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

  @ManyToOne(() => FamiliaEntity, { eager: true })
  @JoinColumn()
  @Field(() => FamiliaEntity)
  familia: IFamilia;

  @ManyToOne(() => GrupoEntity, { eager: true })
  @JoinColumn()
  @Field(() => GrupoEntity)
  grupo: IGrupo;

  @ManyToOne(() => FornecedorEntity, { eager: true })
  @JoinColumn()
  @Field(() => FornecedorEntity)
  fornecedor: IFornecedor;

  @Field()
  codigoBarra: string;
}
