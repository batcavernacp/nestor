import { Body, Controller, Post } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { ApiTags } from '@nestjs/swagger';
import { VendedorDto } from './vendedor.dto';

@Controller('vendedores')
@ApiTags('vendedores')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post()
  create(@Body() vendedor: VendedorDto) {
    return this.vendedorService.create(vendedor);
  }
}
