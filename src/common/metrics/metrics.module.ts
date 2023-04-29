import { Global, Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

@Global()
@Module({
  providers: [
    MetricsService,
    makeCounterProvider({
      name: 'visita_count',
      help: 'contador de chamadas',
      labelNames: ['uri', 'method'],
    }),
  ],
  exports: [MetricsService],
})
export class MetricsModule {}
