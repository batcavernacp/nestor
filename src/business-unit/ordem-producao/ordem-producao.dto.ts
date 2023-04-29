import { IsArray, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IPedido } from '../pedido/pedido.interface';

export class OrdemProducaoDto {
  @IsArray()
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'uuid' } })
  @IsNotEmpty()
  pedidos: IPedido[];
}
