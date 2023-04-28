import { Controller, Get } from '@nestjs/common';
import { FamiliaService } from './familia.service';

@Controller('familias')
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @Get()
  getHello() {
    return this.familiaService.findAll();
  }
}
