import { Body, Controller, Post } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoDto } from './pedido.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('pedidos')
@ApiTags('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  create(@Body() pedido: PedidoDto) {
    return this.pedidoService.create(pedido);
  }
}
