import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './providers/database/database.module';
import { PrometheusModule, makeCounterProvider } from '@willsoto/nestjs-prometheus';
import { MetricsService } from './services/metrics.service';

@Module({
  imports: [DatabaseModule, PrometheusModule.register()],
  controllers: [AppController],
  providers: [
    AppService,
    MetricsService,
    makeCounterProvider({
      name: "visita",
      help: "metric_help",
      labelNames: ["uri"],
    }),
  ],
})
export class AppModule { }
