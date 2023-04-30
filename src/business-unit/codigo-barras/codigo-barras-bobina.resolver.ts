import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CodigoBarrasService } from './codigo-barras.service';
import { Inject } from '@nestjs/common';
import { BobinaEntity } from '../bobina/bobina.entity';
import { JumboService } from '../jumbo/jumbo.service';

@Resolver(() => BobinaEntity)
export class CodigoBarrasBobinaResolver {
  constructor(
    @Inject(CodigoBarrasService) private readonly codigoBarrasService: CodigoBarrasService,
    @Inject(JumboService) private readonly jumboService: JumboService,
  ) {}

  @ResolveField(() => String)
  async codigoBarra(@Parent() bobina: BobinaEntity) {
    if (!bobina.jumbo) {
      bobina.jumbo = await this.jumboService.findOne(bobina.jumbo_id);
    }

    return this.codigoBarrasService.gerarCodigoBarrasBobina(bobina);
  }
}
