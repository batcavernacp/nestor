import { Inject } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { JumboService } from './jumbo.service';
import { JumboEntity } from './jumbo.entity';
import { EntradaEntity } from '../entrada/entrada.entity';

@Resolver(() => EntradaEntity)
export class JumboEntradaResolver {
  constructor(@Inject(JumboService) private readonly jumboService: JumboService) {}

  @ResolveField(() => JumboEntity)
  async jumbo(@Parent() { jumbo_id }: EntradaEntity) {
    return this.jumboService.findOne(jumbo_id);
  }
}
