import { IJumbo } from '../jumbo/jumbo.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class EntradaDto {
  @ApiProperty({ type: String, format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  jumbo: IJumbo;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantidade: number;
}
