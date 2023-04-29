import { IVendedor } from '../vendedor/vendedor.interface';
import { ICliente } from '../cliente/cliente.interface';
import { IMovimento } from '../movimento/movimento.interface';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PedidoDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  sequencia: number;

  @IsNotEmpty()
  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsUUID()
  vendedor: IVendedor;
  cliente: ICliente;
  movimentos: IMovimento[];
}
