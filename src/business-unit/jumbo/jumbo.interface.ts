import { IEntityBase } from '../../common/entity/entity-base.interface';
import { IFamilia } from '../familia/familia.interface';
import { IFornecedor } from '../fornecedor/fornecedor.interface';
import { IGrupo } from '../grupo/grupo.interface';

export interface IJumbo extends IEntityBase {
  codigo: number;
  nome: string;
  referencia: string;
  familia: IFamilia;
  grupo: IGrupo;
  fornecedor: IFornecedor;
  comprimento: number;
  largura: number;
}
