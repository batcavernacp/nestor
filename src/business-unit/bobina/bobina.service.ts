import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BobinaEntity } from './bobina.entity';
import { CreateBobinaDto } from './dto/create-bobina.dto';

@Injectable()
export class BobinaService {
  constructor(
    @InjectRepository(BobinaEntity)
    private bobinaRepository: Repository<BobinaEntity>,
  ) {}

  findAll() {
    return this.bobinaRepository.find();
  }

  findOne(id: string) {
    return this.bobinaRepository.findOne({ where: { id }, select: {} });
  }

  create(bobina: CreateBobinaDto) {
    return this.bobinaRepository.save(new BobinaEntity(bobina));
  }

  update(bobina: BobinaEntity) {
    return this.bobinaRepository.save(bobina);
  }

  delete(id: string) {
    return this.bobinaRepository.delete({ id });
  }
}
