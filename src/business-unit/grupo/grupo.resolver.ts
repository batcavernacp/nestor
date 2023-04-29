import { Inject } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoDto } from './grupo.dto';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { GrupoEntity } from './grupo.entity';

export class GrupoResolver {
  constructor(@Inject(GrupoService) private readonly grupoService: GrupoService) {}

  @Mutation(() => GrupoEntity)
  createGrupo(@Args('grupo') grupo: GrupoDto) {
    return this.grupoService.create(grupo);
  }

  @Query(() => [GrupoEntity])
  grupos() {
    return this.grupoService.findAll();
  }
}
