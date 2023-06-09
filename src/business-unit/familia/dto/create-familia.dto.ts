import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFamiliaDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  codigo: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  nome: string;
}
