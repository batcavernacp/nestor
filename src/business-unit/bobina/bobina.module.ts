import { Module } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaResolver } from './bobina.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BobinaEntity } from './bobina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BobinaEntity])],
  providers: [BobinaService, BobinaResolver],
})
export class BobinaModule {}
