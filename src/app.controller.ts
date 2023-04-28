import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MetricsService } from './services/metrics.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logService: MetricsService) {
  }

  @Get()
  getHello(): string {
    this.logService.log("/")

    return this.appService.getHello();
  }
}
