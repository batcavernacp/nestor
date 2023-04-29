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
    makeCounterProvider({
      name: 'error_count',
      help: 'contador de error',
      labelNames: ['uri', 'method', 'code', 'message'],
    }),
  ],
  exports: [MetricsService],
})
export class MetricsModule {}
