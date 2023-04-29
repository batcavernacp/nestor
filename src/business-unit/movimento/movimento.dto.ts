import { IBobina } from '../bobina/bobina.interface';
import { IPedido } from '../pedido/pedido.interface';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MovimentoDto {
  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  bobina: IBobina;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  pedido: IPedido;
}
