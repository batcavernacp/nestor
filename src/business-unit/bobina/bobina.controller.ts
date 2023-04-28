import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaEntity } from './bobina.entity';

@Controller('bobinas')
export class BobinaController {
  constructor(private readonly bobinaService: BobinaService) {}

  @Get()
  findAll() {
    return this.bobinaService.findAll();
  }

  @Get(':id')
  findOne(id: number) {
    return this.bobinaService.findOne(id);
  }

  @Post()
  create(@Body() bobina: BobinaEntity) {
    return this.bobinaService.create(bobina);
  }

  @Put(':id')
  update(@Body() bobina: BobinaEntity) {
    return this.bobinaService.update(bobina);
  }

  @Delete(':id')
  delete(id: number) {
    return this.bobinaService.delete(id);
  }
}
