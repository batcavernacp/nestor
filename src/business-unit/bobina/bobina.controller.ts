import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaEntity } from './bobina.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBobinaDto } from './dto/create-bobina.dto';

@Controller('bobinas')
@ApiTags('bobinas')
export class BobinaController {
  constructor(private readonly bobinaService: BobinaService) {}

  @Get()
  @ApiOkResponse({ type: BobinaEntity, isArray: true })
  findAll(): Promise<BobinaEntity[]> {
    return this.bobinaService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BobinaEntity })
  @ApiParam({ name: 'id', type: String, description: 'UUID' })
  findOne(@Param('id') id: string) {
    return this.bobinaService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: BobinaEntity })
  create(@Body() bobina: CreateBobinaDto) {
    return this.bobinaService.create(bobina);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: String, description: 'UUID' })
  @ApiOkResponse({ type: BobinaEntity })
  update(@Body() bobina: BobinaEntity) {
    return this.bobinaService.update(bobina);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String, description: 'UUID' })
  @ApiOkResponse({ type: BobinaEntity })
  delete(@Param('id') id: string) {
    return this.bobinaService.delete(id);
  }
}
