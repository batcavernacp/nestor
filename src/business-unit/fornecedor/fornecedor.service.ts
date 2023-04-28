import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FornecedorEntity } from './fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectRepository(FornecedorEntity)
    private fornecedorRepository: Repository<FornecedorEntity>,
  ) {}

  async findAll(): Promise<FornecedorEntity[]> {
    return this.fornecedorRepository.find();
  }

  findById(id: string): Promise<FornecedorEntity> {
    return this.fornecedorRepository.findOne({ where: { id } });
  }
}
