import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MetricsService } from './app/metrics/metrics.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logService: MetricsService) {
  }

  @Get()
  // @Log("/")
  getHello(): string {
    this.logService.log("/")

    return this.appService.getHello();
  }
}
