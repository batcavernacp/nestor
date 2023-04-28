import { Module } from '@nestjs/common';
import { MovimentoController } from './movimento.controller';
import { MovimentoService } from './movimento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentoEntity } from './movimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimentoEntity])],
  controllers: [MovimentoController],
  providers: [MovimentoService],
})
export class MovimentoModule {}
