import { Module } from '@nestjs/common';
import { MovimentoResolver } from './movimento.resolver';
import { MovimentoService } from './movimento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentoEntity } from './movimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimentoEntity])],
  providers: [MovimentoService, MovimentoResolver],
})
export class MovimentoModule {}
