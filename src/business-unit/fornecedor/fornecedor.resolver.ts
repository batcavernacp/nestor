import { Inject } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorEntity } from './fornecedor.entity';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { FornecedorDto } from './fornecedor.dto';

export class FornecedorResolver {
  constructor(@Inject(FornecedorService) private readonly fornecedorService: FornecedorService) {}

  @Query(() => [FornecedorEntity])
  fornecedores() {
    return this.fornecedorService.findAll();
  }

  @Mutation(() => FornecedorEntity)
  createFornecedor(@Args('fornecedor') fornecedor: FornecedorDto) {
    return this.fornecedorService.create(fornecedor);
  }
}
