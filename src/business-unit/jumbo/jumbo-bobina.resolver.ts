import { Inject } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BobinaEntity } from '../bobina/bobina.entity';
import { JumboService } from './jumbo.service';
import { JumboEntity } from './jumbo.entity';

@Resolver(() => BobinaEntity)
export class JumboBobinaResolver {
  constructor(@Inject(JumboService) private readonly jumboService: JumboService) {}

  @ResolveField(() => JumboEntity)
  async jumbo(@Parent() { jumbo_id }: BobinaEntity) {
    return this.jumboService.findOne(jumbo_id);
  }
}
