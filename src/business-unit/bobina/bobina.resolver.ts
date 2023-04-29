import { Body, Inject } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaEntity } from './bobina.entity';
import { CreateBobinaDto } from './dto/create-bobina.dto';
import { Args, Mutation, Query } from '@nestjs/graphql';

export class BobinaResolver {
  constructor(@Inject(BobinaService) private readonly bobinaService: BobinaService) {}

  @Query(() => [BobinaEntity])
  findAll(): Promise<BobinaEntity[]> {
    return this.bobinaService.findAll();
  }

  @Query(() => BobinaEntity)
  findOne(@Args('id') id: string) {
    return this.bobinaService.findOne(id);
  }

  @Mutation(() => BobinaEntity)
  create(@Body('bobina') bobina: CreateBobinaDto) {
    return this.bobinaService.create(bobina);
  }
}
