import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Injectable()
export class MetricsService {
  constructor(@InjectMetric('visita_count') private counter: Counter<string>) {}

  log(uri: string, method: string) {
    this.counter.inc({ uri, method });
  }
}
