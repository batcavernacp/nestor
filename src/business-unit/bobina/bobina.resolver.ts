import { forwardRef, Inject } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaEntity } from './bobina.entity';
import { CreateBobinaDto } from './dto/create-bobina.dto';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CodigoBarrasService } from '../codigo-barras/codigo-barras.service';

@Resolver(() => BobinaEntity)
export class BobinaResolver {
  constructor(
    @Inject(BobinaService) private readonly bobinaService: BobinaService, // @Inject(JumboService) private readonly jumboService: JumboService,
    @Inject(forwardRef(() => CodigoBarrasService))
    private readonly codigoBarrasService: CodigoBarrasService,
  ) {}

  @Query(() => [BobinaEntity])
  bobinas(): Promise<BobinaEntity[]> {
    return this.bobinaService.findAll();
  }

  @Query(() => BobinaEntity)
  bobina(@Args('id') id: string) {
    return this.bobinaService.findOne(id);
  }

  @Mutation(() => BobinaEntity)
  createBobina(@Args('bobina') bobina: CreateBobinaDto) {
    return this.bobinaService.create(bobina);
  }

  @ResolveField(() => String)
  async codigoBarra(@Parent() bobina: BobinaEntity) {
    return this.codigoBarrasService.gerarCodigoBarrasBobina(bobina);
  }
}
