import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GrupoDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  codigo: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;
}
