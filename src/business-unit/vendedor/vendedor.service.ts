import { Injectable } from '@nestjs/common';
import { VendedorEntity } from './vendedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(VendedorEntity)
    private vendedorRepository: Repository<VendedorEntity>,
  ) {}
}
