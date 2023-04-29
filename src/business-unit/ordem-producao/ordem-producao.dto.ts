import { IPedido } from '../pedido/pedido.interface';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class OrdemProducaoDto {
  @Field(() => [ID])
  pedidos: IPedido[];
}
