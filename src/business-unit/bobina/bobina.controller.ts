import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaEntity } from './bobina.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('bobinas')
@ApiTags('bobinas')
export class BobinaController {
  constructor(private readonly bobinaService: BobinaService) {}

  @Get()
  findAll() {
    return this.bobinaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
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
  delete(@Param('id') id: string) {
    return this.bobinaService.delete(id);
  }
}
