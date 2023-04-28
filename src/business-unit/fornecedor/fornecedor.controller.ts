import { Controller, Get } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('fornecedores')
@ApiTags('fornecedores')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Get()
  getAll() {
    return this.fornecedorService.findAll();
  }
}
