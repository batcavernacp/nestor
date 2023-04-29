import { Body, Controller, Post } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboDto } from './jumbo.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('jumbos')
@ApiTags('jumbos')
export class JumboController {
  constructor(private readonly jumboService: JumboService) {}

  @Post()
  create(@Body() jumbo: JumboDto) {
    return this.jumboService.create(jumbo);
  }
}
