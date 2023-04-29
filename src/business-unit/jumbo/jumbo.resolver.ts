import { Inject } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboDto } from './jumbo.dto';
import { JumboEntity } from './jumbo.entity';
import { Args, Mutation, Query } from '@nestjs/graphql';

export class JumboResolver {
  constructor(@Inject(JumboService) private readonly jumboService: JumboService) {}

  @Mutation(() => JumboEntity)
  createJumbo(@Args('jumbo') jumbo: JumboDto) {
    return this.jumboService.create(jumbo);
  }

  @Query(() => [JumboEntity])
  jumbos() {
    return this.jumboService.findAll();
  }
}
