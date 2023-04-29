import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FornecedorDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  codigo: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;
}
