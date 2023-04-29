import { Body, Inject, Post } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaDto } from './entrada.dto';
import { Mutation, Query } from '@nestjs/graphql';
import { EntradaEntity } from './entrada.entity';

export class EntradaResolver {
  constructor(@Inject(EntradaService) private readonly entradaService: EntradaService) {}

  @Mutation(() => EntradaEntity)
  create(@Body() entrada: EntradaDto) {
    return this.entradaService.create(entrada);
  }

  @Query(() => [EntradaEntity])
  findAll() {
    return this.entradaService.findAll();
  }
}
