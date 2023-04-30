import { IVendedor } from '../vendedor/vendedor.interface';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class PedidoDto {
  @Field()
  sequencia: number;

  @Field(() => ID)
  vendedor_id: string;

  @Field(() => ID)
  cliente_id: string;

  @Field(() => [ID])
  movimentos: IMovimento[];
}
