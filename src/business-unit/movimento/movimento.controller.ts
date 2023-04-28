import { Controller } from '@nestjs/common';
import { MovimentoService } from './movimento.service';

@Controller('movimento')
export class MovimentoController {
  constructor(private readonly movimentoService: MovimentoService) {}
}
