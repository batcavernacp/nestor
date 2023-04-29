import { FamiliaService } from './familia.service';
import { FamiliaEntity } from './familia.entity';
import { CreateFamiliaDto } from './dto/create-familia.dto';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

export class FamiliaResolver {
  constructor(@Inject(FamiliaService) private readonly familiaService: FamiliaService) {}

  @Query(() => [FamiliaEntity])
  familias() {
    return this.familiaService.findAll();
  }

  @Query(() => FamiliaEntity)
  familia(@Args('id') id: string) {
    return this.familiaService.findOne(id);
  }

  @Mutation(() => FamiliaEntity)
  createFamilia(@Args('familia') familia: CreateFamiliaDto) {
    return this.familiaService.create(familia);
  }

  @Mutation(() => FamiliaEntity)
  editFamilia(@Args('familia') familia: CreateFamiliaDto, @Args('id') id: string) {
    return this.familiaService.update(id, familia);
  }

  @Mutation(() => FamiliaEntity)
  deleteFamilia(@Args('id') id: string) {
    console.log(id);
    return this.familiaService.delete(id);
  }
}
