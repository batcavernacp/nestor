import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get(':id')
  async getById(@Param('id') id: number) {
    const cliente = await this.clienteService.findById(id);

    if (!cliente) {
      // paia
      throw new NotFoundException({ message: `Cliente ${id} não encontrado` });
    }

    return cliente;
  }
}
