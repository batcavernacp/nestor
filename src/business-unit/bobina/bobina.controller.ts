import { Controller, Get } from '@nestjs/common';
import { BobinaService } from './bobina.service';

@Controller('bobinas')
export class BobinaController {
  constructor(private readonly bobinaService: BobinaService) {}

  @Get()
  findAll() {
    return this.bobinaService.findAll();
  }
}
