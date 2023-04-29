import { Inject } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoDto } from './pedido.dto';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { PedidoEntity } from './pedido.entity';

export class PedidoResolver {
  constructor(@Inject(PedidoService) private readonly pedidoService: PedidoService) {}

  @Mutation(() => PedidoEntity)
  createPedido(@Args('pedido') pedido: PedidoDto) {
    return this.pedidoService.create(pedido);
  }

  @Query(() => [PedidoEntity])
  pedidos() {
    return this.pedidoService.findAll();
  }
}
