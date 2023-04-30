import { Inject } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaEntity } from './bobina.entity';
import { CreateBobinaDto } from './dto/create-bobina.dto';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { MovimentoEntity } from '../movimento/movimento.entity';

@Resolver(() => MovimentoEntity)
export class BobinaResolver {
  constructor(@Inject(BobinaService) private readonly bobinaService: BobinaService) {}

  @Query(() => [BobinaEntity])
  bobinas(): Promise<BobinaEntity[]> {
    return this.bobinaService.findAll();
  }

  @Query(() => BobinaEntity)
  bobinaById(@Args('id') id: string) {
    return this.bobinaService.findOne(id);
  }

  @Mutation(() => BobinaEntity)
  createBobina(@Args('bobina') bobina: CreateBobinaDto) {
    return this.bobinaService.create(bobina);
  }

  @ResolveField(() => BobinaResolver)
  bobina(@Parent() { bobina_id }: MovimentoEntity) {
    return this.bobinaService.findOne(bobina_id);
  }
}
