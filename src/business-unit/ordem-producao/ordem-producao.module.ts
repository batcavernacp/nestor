import { Module } from '@nestjs/common';
import { OrdemProducaoController } from './ordem-producao.controller';
import { OrdemProducaoService } from './ordem-producao.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrdemProducaoModule])],
  controllers: [OrdemProducaoController],
  providers: [OrdemProducaoService],
})
export class OrdemProducaoModule {}
