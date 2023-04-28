import { Controller, Get } from '@nestjs/common';
import { FamiliaService } from './familia.service';
import { MetricsService } from 'src/app/metrics/metrics.service';

@Controller("familias")
export class FamiliaController {

  constructor(private readonly familiaService: FamiliaService, private readonly logService: MetricsService) {
  }

  @Get()
  getHello() {
    this.logService.log("/familias")

    return this.familiaService.findAll()
  }
}
