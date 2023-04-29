import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IFamilia } from '../familia/familia.interface';
import { IGrupo } from '../grupo/grupo.interface';
import { IFornecedor } from '../fornecedor/fornecedor.interface';

export class JumboDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  codigo: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  referencia: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  comprimento: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  largura: number;

  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  familia: IFamilia;

  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  grupo: IGrupo;

  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  fornecedor: IFornecedor;
}
