import { Module } from '@nestjs/common';
import { OrdemProducaoController } from './ordem-producao.controller';
import { OrdemProducaoService } from './ordem-producao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdemProducaoEntity } from './ordem-producao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdemProducaoEntity])],
  controllers: [OrdemProducaoController],
  providers: [OrdemProducaoService],
})
export class OrdemProducaoModule {}
