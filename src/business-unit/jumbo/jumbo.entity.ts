import { Entity, Column, ManyToMany, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IJumbo } from './jumbo.interface';
import { IFamilia } from '../familia/familia.interface';
import { FamiliaEntity } from '../familia/familia.entity';
import { GrupoEntity } from '../grupo/grupo.entity';
import { IGrupo } from '../grupo/grupo.interface';
import { FornecedorEntity } from '../fornecedor/fornecedor.entity';

@Entity({ name: 'jumbos' })
export class JumboEntity extends EntityBaseModel<JumboEntity> implements IJumbo {
  @Column({ length: 30 })
  codigo: string;

  @Column('text')
  nome: string;

  @Column('text')
  referencia: string;

  @Column('int')
  comprimento: number;

  @Column('int')
  largura: number;

  @ManyToOne(() => FamiliaEntity)
  @JoinColumn()
  familia: IFamilia;

  @ManyToOne(() => GrupoEntity)
  @JoinColumn()
  grupo: IGrupo;

  @ManyToMany(() => FornecedorEntity)
  @JoinTable()
  fornecedores: FornecedorEntity[];
}
