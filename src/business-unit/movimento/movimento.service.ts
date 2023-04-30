import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { MovimentoEntity } from './movimento.entity';
import { MovimentoDto } from './movimento.dto';

@Injectable()
export class MovimentoService {
  constructor(
    @InjectRepository(MovimentoEntity)
    private movimentoRepository: Repository<MovimentoEntity>,
  ) {}

  create(movimento: MovimentoDto) {
    return this.movimentoRepository.save(new MovimentoEntity(movimento));
  }

  findAll() {
    this.movimentoRepository.find({ where: { id: In([1, 2, 3]) } });
    return this.movimentoRepository.find();
  }

  findByPedidoId(pedido_id: string) {
    return this.movimentoRepository.find({ where: { pedido_id } });
  }
}
