import { VendedorService } from './vendedor.service';
import { VendedorDto } from './vendedor.dto';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { VendedorEntity } from './vendedor.entity';
import { Inject } from '@nestjs/common';
import { PedidoEntity } from '../pedido/pedido.entity';

@Resolver(() => PedidoEntity)
export class VendedorResolver {
  constructor(@Inject(VendedorService) private readonly vendedorService: VendedorService) {}

  @Mutation(() => VendedorEntity)
  createVendedor(@Args('vendedor') vendedor: VendedorDto) {
    return this.vendedorService.create(vendedor);
  }

  @Query(() => [VendedorEntity])
  vendedores() {
    return this.vendedorService.findAll();
  }

  @ResolveField(() => VendedorEntity)
  vendedor(@Parent() pedido: PedidoEntity) {
    return this.vendedorService.findById(pedido.vendedor_id);
  }
}
