import { Injectable } from '@nestjs/common';
import { VendedorEntity } from './vendedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VendedorDto } from './vendedor.dto';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(VendedorEntity)
    private vendedorRepository: Repository<VendedorEntity>,
  ) {}

  create(vendedor: VendedorDto) {
    return this.vendedorRepository.save(new VendedorEntity(vendedor));
  }
}
