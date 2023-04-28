import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './providers/database/database.module';
import { PrometheusModule, makeCounterProvider } from '@willsoto/nestjs-prometheus';
import { MetricsService } from './app/metrics/metrics.service';
import { FamiliaModule } from './app/familia/familia.module';
import { FamiliaController } from './app/familia/familia.controller';
import { MetricsModule } from './app/metrics/metrics.module';

@Module({
  imports: [
    PrometheusModule.register(),
    DatabaseModule,
    FamiliaModule,
    MetricsModule
  ],
  controllers: [AppController, FamiliaController],
  providers: [
    AppService,
  ],
})
export class AppModule {
}
