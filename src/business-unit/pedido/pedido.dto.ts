import { IVendedor } from '../vendedor/vendedor.interface';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class PedidoDto {
  @Field()
  sequencia: number;

  @Field(() => ID)
  vendedor: IVendedor;

  @Field(() => ID)
  cliente: ICliente;

  @Field(() => [ID])
  movimentos: IMovimento[];
}
