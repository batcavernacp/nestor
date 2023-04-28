import { Entity, Column, ManyToMany, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
import { BaseModel } from '../base.model';
import { IJumbo } from './jumbo.interface';
import { IFamilia } from '../familia/familia.interface';
import { FamiliaModel } from '../familia/familia.model';
import { GrupoModel } from '../grupo/grupo.model';
import { IGrupo } from '../grupo/grupo.interface';
import { FornecedorModel } from '../fornecedor/fornecedor.model';

@Entity()
export class JumboModel extends BaseModel<JumboModel> implements IJumbo {
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

  @ManyToOne(() => FamiliaModel)
  @JoinColumn()
  familia: IFamilia;

  @ManyToOne(() => GrupoModel)
  @JoinColumn()
  grupo: IGrupo;

  @ManyToMany(() => FornecedorModel)
  @JoinTable()
  fornecedores: FornecedorModel[];
}
