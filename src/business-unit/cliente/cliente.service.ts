import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private bobinaRepository: Repository<ClienteEntity>,
  ) {}

  findById(id: number) {
    return this.bobinaRepository.findOne({ where: { id } });
  }
}
