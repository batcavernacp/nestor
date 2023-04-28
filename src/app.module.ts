import { Module } from '@nestjs/common';
import { PostgresModule } from './config/postgres/postgres.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { BusinessUnitModule } from './business-unit/business-unit.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrometheusModule.register(), PostgresModule, BusinessUnitModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
