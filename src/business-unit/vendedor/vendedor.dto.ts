import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VendedorDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  codigo: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;
}
