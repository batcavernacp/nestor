import { Module } from '@nestjs/common';
import { MetricsModule } from './metrics/metrics.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { LoggingInterceptor } from './logging/logging.interceptor';

@Module({
  imports: [PrometheusModule.register(), MetricsModule],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: LoggingInterceptor,
    },
  ],
})
export class CommonModule {}
