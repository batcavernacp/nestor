import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FamiliaService } from './familia.service';
import { FamiliaEntity } from './familia.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('familias')
@ApiTags('familias')
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @Get()
  getAll() {
    return this.familiaService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.familiaService.findOne(id);
  }

  @Post()
  create(@Body() familia: FamiliaEntity) {
    return this.familiaService.create(familia);
  }

  @Put(':id')
  edit(@Body() familia: FamiliaEntity) {
    return this.familiaService.update(familia);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.familiaService.delete(id);
  }
}
