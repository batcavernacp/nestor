import { OrdemProducaoService } from './ordem-producao.service';
import { OrdemProducaoDto } from './ordem-producao.dto';
import { Inject } from '@nestjs/common';
import { OrdemProducaoEntity } from './ordem-producao.entity';
import { Args, Mutation, Query } from '@nestjs/graphql';

export class OrdemProducaoResolver {
  constructor(
    @Inject(OrdemProducaoService) private readonly ordemProducaoService: OrdemProducaoService,
  ) {}

  @Mutation(() => OrdemProducaoEntity)
  createOrdemProducao(@Args('ordemProducao') ordemProducao: OrdemProducaoDto) {
    return this.ordemProducaoService.create(ordemProducao);
  }

  @Query(() => [OrdemProducaoEntity])
  ordensProducao() {
    return this.ordemProducaoService.findAll();
  }
}
