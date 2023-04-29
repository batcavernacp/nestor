import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FamiliaService } from './familia.service';
import { FamiliaEntity } from './familia.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFamiliaDto } from './dto/create-familia.dto';
import { IsUUID } from 'class-validator';

@Controller('familias')
@ApiTags('familias')
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @Get()
  @ApiOkResponse({ type: FamiliaEntity, isArray: true })
  getAll() {
    return this.familiaService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FamiliaEntity })
  @ApiParam({ name: 'id', type: String, description: 'UUID' })
  getById(@Param('id') id: string) {
    return this.familiaService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: FamiliaEntity })
  create(@Body() familia: CreateFamiliaDto) {
    return this.familiaService.create(familia);
  }

  @Put(':id')
  @ApiOkResponse({ type: FamiliaEntity })
  @ApiParam({ name: 'id', type: String, description: 'UUID' })
  edit(@Body() familia: CreateFamiliaDto, @Param('id') id: string) {
    return this.familiaService.update(id, familia);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FamiliaEntity })
  @ApiParam({ name: 'id', type: String, description: 'UUID' })
  delete(@Param('id') id: string) {
    return this.familiaService.delete(id);
  }
}
