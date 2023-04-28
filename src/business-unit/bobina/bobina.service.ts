import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BobinaEntity } from './bobina.entity';

@Injectable()
export class BobinaService {
  constructor(
    @InjectRepository(BobinaEntity)
    private bobinaRepository: Repository<BobinaEntity>,
  ) {}
  findAll() {
    return this.bobinaRepository.find();
  }
}
