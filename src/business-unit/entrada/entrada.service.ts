import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntradaEntity } from './entrada.entity';
import { EntradaDto } from './entrada.dto';

@Injectable()
export class EntradaService {
  constructor(
    @InjectRepository(EntradaEntity)
    private entradaRepository: Repository<EntradaEntity>,
  ) {}

  create(entrada: EntradaDto) {
    return this.entradaRepository.save(new EntradaEntity(entrada));
  }

  findAll() {
    return this.entradaRepository.find();
  }
}
