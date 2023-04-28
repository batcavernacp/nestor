import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresService } from './postgres.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresService,
      inject: [PostgresService],
    }),
  ],
})
export class PostgresModule {}
