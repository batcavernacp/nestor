import { Module } from '@nestjs/common';
import { OrdemProducaoResolver } from './ordem-producao.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdemProducaoEntity } from './ordem-producao.entity';
import { OrdemProducaoService } from './ordem-producao.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrdemProducaoEntity])],
  providers: [OrdemProducaoService, OrdemProducaoResolver],
})
export class OrdemProducaoModule {}
