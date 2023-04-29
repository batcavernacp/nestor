import { Body, Controller, Post } from '@nestjs/common';
import { OrdemProducaoService } from './ordem-producao.service';
import { OrdemProducaoDto } from './ordem-producao.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('ordens-producao')
@ApiTags('ordens-producao')
export class OrdemProducaoController {
  constructor(private readonly ordemProducaoService: OrdemProducaoService) {}

  @Post()
  create(@Body() ordemProducao: OrdemProducaoDto) {
    return this.ordemProducaoService.create(ordemProducao);
  }
}
