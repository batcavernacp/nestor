import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFamiliaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  nome: string;
}
