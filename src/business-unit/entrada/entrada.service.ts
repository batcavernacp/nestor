import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntradaEntity } from './entrada.entity';

@Injectable()
export class EntradaService {
  constructor(
    @InjectRepository(EntradaEntity)
    private entradaRepository: Repository<EntradaEntity>,
  ) {}
}
