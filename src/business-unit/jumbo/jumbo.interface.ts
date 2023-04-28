import { IEntityBase } from '../../common/entity/entity-base.interface';
import { IFamilia } from '../familia/familia.interface';
import { IFornecedor } from '../fornecedor/fornecedor.interface';
import { IGrupo } from '../grupo/grupo.interface';

export interface IJumbo extends IEntityBase {
  codigo: string;
  nome: string;
  referencia: string;
  familia: IFamilia;
  grupo: IGrupo;
  fornecedores: IFornecedor[];
  comprimento: number;
  largura: number;
}
