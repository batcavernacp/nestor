import { Body, Controller, Post } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaDto } from './entrada.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('entrada')
@ApiTags('entrada')
export class EntradaController {
  constructor(private readonly entradaService: EntradaService) {}

  @Post()
  create(@Body() entrada: EntradaDto) {
    return this.entradaService.create(entrada);
  }
}
