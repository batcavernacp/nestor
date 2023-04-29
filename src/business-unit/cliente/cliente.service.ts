import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}

  findById(id: string) {
    return this.clienteRepository.findOne({ where: { id } });
  }

  findAll() {
    return this.clienteRepository.find();
  }

  create(cliente: CreateClienteDto) {
    return this.clienteRepository.save(new ClienteEntity(cliente));
  }

  update(id: string, cliente: CreateClienteDto) {
    return this.clienteRepository.update(id, cliente);
  }

  delete(id: string) {
    return this.clienteRepository.delete(id);
  }
}
