import { Module } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaResolver } from './bobina.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BobinaEntity } from './bobina.entity';
import { JumboModule } from '../jumbo/jumbo.module';

@Module({
  imports: [TypeOrmModule.forFeature([BobinaEntity]), JumboModule],
  providers: [BobinaService, BobinaResolver],
})
export class BobinaModule {}
