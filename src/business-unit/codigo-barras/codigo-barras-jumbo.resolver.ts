import { JumboEntity } from '../jumbo/jumbo.entity';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CodigoBarrasService } from './codigo-barras.service';
import { Inject } from '@nestjs/common';

@Resolver(() => JumboEntity)
export class CodigoBarrasJumboResolver {
  constructor(
    @Inject(CodigoBarrasService) private readonly codigoBarrasService: CodigoBarrasService,
  ) {}

  @ResolveField(() => String)
  async codigoBarra(@Parent() jumbo: JumboEntity) {
    return this.codigoBarrasService.gerarCodigoBarrasJumbo(jumbo);
  }
}
