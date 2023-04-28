import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IPedido } from './pedido.interface';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { IVendedor } from '../vendedor/vendedor.interface';
import { IOrdemProducao } from '../ordem-producao/ordem-producao.interface';
export declare class PedidoEntity extends EntityBaseModel<PedidoEntity> implements IPedido {
    sequencia: number;
    vendedor: IVendedor;
    cliente: ICliente;
    movimentos: IMovimento[];
    ordemProducao: IOrdemProducao;
}
