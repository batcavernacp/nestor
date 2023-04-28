import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FamiliaService } from './familia.service';
import { FamiliaEntity } from './familia.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('familias')
@ApiTags('familias')
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok', type: FamiliaEntity, isArray: true })
  getAll() {
    return this.familiaService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Ok', type: FamiliaEntity })
  getById(@Param('id') id: string) {
    return this.familiaService.findOne(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Ok', type: FamiliaEntity })
  create(@Body() familia: FamiliaEntity) {
    return this.familiaService.create(familia);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Ok', type: FamiliaEntity })
  edit(@Body() familia: FamiliaEntity) {
    return this.familiaService.update(familia);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Ok', type: FamiliaEntity })
  delete(@Param('id') id: string) {
    return this.familiaService.delete(id);
  }
}
