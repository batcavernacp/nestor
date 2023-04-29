import { IBobina } from '../bobina/bobina.interface';
import { IPedido } from '../pedido/pedido.interface';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class MovimentoDto {
  @Field(() => ID)
  bobina: IBobina;

  @Field()
  quantidade: number;

  @Field(() => ID)
  pedido: IPedido;
}
