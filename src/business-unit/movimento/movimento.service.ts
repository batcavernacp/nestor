import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return this.movimentoRepository.find();
  }
}
