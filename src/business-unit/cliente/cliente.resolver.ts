import { Body, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ClienteEntity } from './cliente.entity';
import { Args, Mutation, Query } from '@nestjs/graphql';

export class ClienteResolver {
  constructor(@Inject(ClienteService) private readonly clienteService: ClienteService) {}

  @Query(() => ClienteEntity)
  async vendedor(@Args('id') id: string) {
    return this.clienteService.findById(id);
  }

  @Query(() => [ClienteEntity])
  vendedores() {
    return this.clienteService.findAll();
  }

  @Mutation(() => ClienteEntity)
  deleteVendedor(@Args('id') id: string) {
    return this.clienteService.delete(id);
  }

  @Mutation(() => ClienteEntity)
  editVendedor(@Args('id') id: string, @Body() cliente: CreateClienteDto) {
    return this.clienteService.update(id, cliente);
  }

  @Mutation(() => ClienteEntity)
  createVendedor(@Args('cliente') cliente: CreateClienteDto) {
    return this.clienteService.create(cliente);
  }
}
