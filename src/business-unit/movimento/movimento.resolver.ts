import { Body, Inject } from '@nestjs/common';
import { MovimentoService } from './movimento.service';
import { MovimentoDto } from './movimento.dto';
import { Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { MovimentoEntity } from './movimento.entity';
import { PedidoEntity } from '../pedido/pedido.entity';

@Resolver(() => PedidoEntity)
export class MovimentoResolver {
  constructor(@Inject(MovimentoService) private readonly movimentoService: MovimentoService) {}

  @Mutation(() => MovimentoEntity)
  createMovimento(@Body() movimento: MovimentoDto) {
    return this.movimentoService.create(movimento);
  }

  @Query(() => [MovimentoEntity])
  movimentos(): Promise<MovimentoEntity[]> {
    return this.movimentoService.findAll();
  }

  @ResolveField(() => MovimentoEntity)
  movimento(@Parent() pedido: PedidoEntity) {
    return this.movimentoService.findByPedidoId(pedido.id);
  }
}
