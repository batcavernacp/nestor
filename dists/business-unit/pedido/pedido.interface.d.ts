import { IEntityBase } from '../../common/entity/entity-base.interface';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { IOrdemProducao } from '../ordem-producao/ordem-producao.interface';
import { IVendedor } from '../vendedor/vendedor.interface';
export interface IPedido extends IEntityBase {
    sequencia: number;
    vendedor: IVendedor;
    cliente: ICliente;
    movimentos: IMovimento[];
    ordemProducao: IOrdemProducao;
}
