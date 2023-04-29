import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ClienteEntity } from './cliente.entity';

@Controller('clientes')
@ApiTags('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get(':id')
  async getById(@Param('id') id: string) {
    const cliente = await this.clienteService.findById(id);

    if (!cliente) {
      // paia
      throw new NotFoundException({ message: `Cliente ${id} não encontrado` });
    }

    return cliente;
  }

  @Get()
  getAll() {
    return this.clienteService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clienteService.delete(id);
  }

  @Put(':id')
  edit(@Param('id') id: string, @Body() cliente: CreateClienteDto) {
    return this.clienteService.update(id, cliente);
  }

  @Post()
  @ApiOkResponse({ type: ClienteEntity })
  create(@Body() cliente: CreateClienteDto) {
    return this.clienteService.create(cliente);
  }
}
