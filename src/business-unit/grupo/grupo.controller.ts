import { Body, Controller, Post } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { ApiTags } from '@nestjs/swagger';
import { GrupoDto } from './grupo.dto';

@Controller('grupos')
@ApiTags('grupos')
export class GrupoController {
  constructor(private readonly grupoService: GrupoService) {}

  @Post()
  create(@Body() grupo: GrupoDto) {
    return this.grupoService.create(grupo);
  }
}
