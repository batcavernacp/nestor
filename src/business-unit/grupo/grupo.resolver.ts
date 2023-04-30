import { Inject } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoDto } from './grupo.dto';
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GrupoEntity } from './grupo.entity';
import { JumboEntity } from '../jumbo/jumbo.entity';

@Resolver(() => JumboEntity)
export class GrupoResolver {
  constructor(@Inject(GrupoService) private readonly grupoService: GrupoService) {}

  @Mutation(() => GrupoEntity)
  createGrupo(@Args('grupo') grupo: GrupoDto) {
    return this.grupoService.create(grupo);
  }

  @Query(() => [GrupoEntity])
  grupos(@Context('teste') teste: number) {
    console.log(teste);
    return this.grupoService.findAll();
  }

  @ResolveField(() => GrupoEntity)
  async jumbo(@Parent() { grupo_id }: JumboEntity) {
    return this.grupoService.findById(grupo_id);
  }
}
