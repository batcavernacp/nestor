import { Controller } from '@nestjs/common';
import { EntradaService } from './entrada.service';

@Controller('entrada')
export class EntradaController {
  constructor(private readonly entradaService: EntradaService) {}
}
