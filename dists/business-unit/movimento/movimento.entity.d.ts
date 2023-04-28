import { EntityBaseModel } from '../../common/entity/entity-base.model';
import { IMovimento } from './movimento.interface';
import { IBobina } from '../bobina/bobina.interface';
import { IPedido } from '../pedido/pedido.interface';
export declare class MovimentoEntity extends EntityBaseModel<MovimentoEntity> implements IMovimento {
    bobina: IBobina;
    quantidade: number;
    pedido: IPedido;
}
