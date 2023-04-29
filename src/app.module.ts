import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PostgresModule } from './config/postgres/postgres.module';
import { BusinessUnitModule } from './business-unit/business-unit.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostgresModule,
    BusinessUnitModule,
    CommonModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
