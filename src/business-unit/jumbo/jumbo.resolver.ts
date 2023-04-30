import { forwardRef, Inject } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboDto } from './jumbo.dto';
import { JumboEntity } from './jumbo.entity';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CodigoBarrasService } from '../codigo-barras/codigo-barras.service';

@Resolver(() => JumboEntity)
export class JumboResolver {
  constructor(
    @Inject(JumboService) private readonly jumboService: JumboService,
    @Inject(forwardRef(() => CodigoBarrasService))
    private readonly codigoBarrasService: CodigoBarrasService,
  ) {}

  @Mutation(() => JumboEntity)
  createJumbo(@Args('jumbo') jumbo: JumboDto) {
    return this.jumboService.create(jumbo);
  }

  @Query(() => [JumboEntity])
  jumbos() {
    return this.jumboService.findAll();
  }

  @ResolveField(() => String)
  async codigoBarra(@Parent() jumbo: JumboEntity) {
    return this.codigoBarrasService.gerarCodigoBarrasJumbo(jumbo);
  }
}
