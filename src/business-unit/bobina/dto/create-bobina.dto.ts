import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { IJumbo } from '../../jumbo/jumbo.interface';

export class CreateBobinaDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  largura: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  comprimento: number;

  @ApiProperty({ type: () => String, format: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  jumbo: IJumbo;
}
