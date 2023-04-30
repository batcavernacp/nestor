import { Inject } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorEntity } from './fornecedor.entity';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { FornecedorDto } from './fornecedor.dto';
import { JumboEntity } from '../jumbo/jumbo.entity';

@Resolver(() => JumboEntity)
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

  @ResolveField(() => FornecedorEntity)
  async fornecedor(@Parent() { fornecedor_id }: JumboEntity) {
    return this.fornecedorService.findById(fornecedor_id);
  }
}
