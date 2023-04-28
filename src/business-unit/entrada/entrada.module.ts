import { Module } from '@nestjs/common';
import { EntradaController } from './entrada.controller';
import { EntradaService } from './entrada.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntradaEntity } from './entrada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntradaEntity])],
  controllers: [EntradaController],
  providers: [EntradaService],
})
export class EntradaModule {}
