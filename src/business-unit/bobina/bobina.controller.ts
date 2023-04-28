import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaEntity } from './bobina.entity';
import { ApiRequestTimeoutResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('bobinas')
@ApiTags('bobinas')
export class BobinaController {
  constructor(private readonly bobinaService: BobinaService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok', type: BobinaEntity, isArray: true })
  findAll(): Promise<BobinaEntity[]> {
    return this.bobinaService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Ok', type: BobinaEntity })
  findOne(@Param('id') id: string) {
    return this.bobinaService.findOne(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Ok', type: BobinaEntity })
  create(@Body() bobina: BobinaEntity) {
    return this.bobinaService.create(bobina);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Ok', type: BobinaEntity })
  update(@Body() bobina: BobinaEntity) {
    return this.bobinaService.update(bobina);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Ok', type: BobinaEntity })
  delete(@Param('id') id: string) {
    return this.bobinaService.delete(id);
  }
}
