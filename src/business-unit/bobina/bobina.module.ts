import { Module } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaController } from './bobina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BobinaEntity } from './bobina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BobinaEntity])],
  controllers: [BobinaController],
  providers: [BobinaService],
})
export class BobinaModule {}
