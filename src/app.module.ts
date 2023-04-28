import { Module } from '@nestjs/common';
import { PostgresModule } from './config/postgres/postgres.module';
import { BusinessUnitModule } from './business-unit/business-unit.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PostgresModule, BusinessUnitModule, CommonModule],
  controllers: [],
})
export class AppModule {}
