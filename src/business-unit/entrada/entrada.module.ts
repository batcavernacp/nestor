import { Module } from '@nestjs/common';
import { EntradaResolver } from './entrada.resolver';
import { EntradaService } from './entrada.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntradaEntity } from './entrada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntradaEntity])],
  providers: [EntradaService, EntradaResolver],
})
export class EntradaModule {}
