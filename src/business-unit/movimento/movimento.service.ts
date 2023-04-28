import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimentoEntity } from './movimento.entity';

@Injectable()
export class MovimentoService {
  constructor(
    @InjectRepository(MovimentoEntity)
    private movimentoRepository: Repository<MovimentoEntity>,
  ) {}
}
