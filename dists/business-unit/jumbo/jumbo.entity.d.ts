import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IJumbo } from './jumbo.interface';
import { IFamilia } from '../familia/familia.interface';
import { IGrupo } from '../grupo/grupo.interface';
import { FornecedorEntity } from '../fornecedor/fornecedor.entity';
export declare class JumboEntity extends EntityBaseModel<JumboEntity> implements IJumbo {
    codigo: string;
    nome: string;
    referencia: string;
    comprimento: number;
    largura: number;
    familia: IFamilia;
    grupo: IGrupo;
    fornecedores: FornecedorEntity[];
}
