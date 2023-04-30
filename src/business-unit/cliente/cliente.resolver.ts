import { Body, Inject } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClienteEntity } from './cliente.entity';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PedidoEntity } from '../pedido/pedido.entity';

@Resolver(() => PedidoEntity)
export class ClienteResolver {
  constructor(@Inject(ClienteService) private readonly clienteService: ClienteService) {}

  @Query(() => ClienteEntity)
  async clienteById(@Args('id') id: string) {
    return this.clienteService.findById(id);
  }

  @Query(() => [ClienteEntity])
  clientes() {
    return this.clienteService.findAll();
  }

  @Mutation(() => ClienteEntity)
  deleteCliente(@Args('id') id: string) {
    return this.clienteService.delete(id);
  }

  @Mutation(() => ClienteEntity)
  editCliente(@Args('id') id: string, @Body() cliente: CreateClienteDto) {
    return this.clienteService.update(id, cliente);
  }

  @Mutation(() => ClienteEntity)
  createCliente(@Args('cliente') cliente: CreateClienteDto) {
    return this.clienteService.create(cliente);
  }

  @ResolveField(() => ClienteEntity)
  cliente(@Parent() pedido: PedidoEntity) {
    return this.clienteService.findById(pedido.cliente_id);
  }
}
