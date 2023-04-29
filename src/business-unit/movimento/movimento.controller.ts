import { Body, Controller, Post } from '@nestjs/common';
import { MovimentoService } from './movimento.service';
import { MovimentoDto } from './movimento.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('movimentos')
@ApiTags('movimentos')
export class MovimentoController {
  constructor(private readonly movimentoService: MovimentoService) {}

  @Post()
  create(@Body() movimento: MovimentoDto) {
    return this.movimentoService.create(movimento);
  }
}
