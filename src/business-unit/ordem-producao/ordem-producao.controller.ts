import { Controller } from '@nestjs/common';
import { OrdemProducaoService } from './ordem-producao.service';

@Controller('ordem-producao')
export class OrdemProducaoController {
  constructor(private readonly ordemProducaoService: OrdemProducaoService) {}
}
