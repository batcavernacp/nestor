import { Injectable } from '@nestjs/common';
import { PedidoEntity } from './pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoDto } from './pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoEntity)
    private pedidoRepository: Repository<PedidoEntity>,
  ) {}

  create(pedido: PedidoDto) {
    return this.pedidoRepository.save(new PedidoEntity(pedido));
  }
}
