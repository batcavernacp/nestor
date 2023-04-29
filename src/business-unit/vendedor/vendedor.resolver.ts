import { VendedorService } from './vendedor.service';
import { VendedorDto } from './vendedor.dto';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { VendedorEntity } from './vendedor.entity';
import { Inject } from '@nestjs/common';

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
}
