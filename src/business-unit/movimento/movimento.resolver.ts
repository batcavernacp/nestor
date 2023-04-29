import { Body, Inject } from '@nestjs/common';
import { MovimentoService } from './movimento.service';
import { MovimentoDto } from './movimento.dto';
import { Mutation, Query } from '@nestjs/graphql';
import { MovimentoEntity } from './movimento.entity';

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
}
