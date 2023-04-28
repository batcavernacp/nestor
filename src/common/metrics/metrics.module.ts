import { Global, Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

@Global()
@Module({
  providers: [
    MetricsService,
    makeCounterProvider({
      name: 'visita',
      help: 'metric_help',
      labelNames: ['uri'],
    }),
  ],
  exports: [MetricsService],
})
export class MetricsModule {}
