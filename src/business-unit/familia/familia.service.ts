import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamiliaEntity } from 'src/business-unit/familia/familia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FamiliaService {
  constructor(
    @InjectRepository(FamiliaEntity)
    private familiaRepository: Repository<FamiliaEntity>,
  ) {}

  async findAll(): Promise<FamiliaEntity[]> {
    return this.familiaRepository.find();
  }

  async create(familia: FamiliaEntity): Promise<FamiliaEntity> {
    return this.familiaRepository.save(familia);
  }

  async findOne(id: string): Promise<FamiliaEntity> {
    return this.familiaRepository.findOneBy({ id });
  }

  async update(familia: FamiliaEntity): Promise<FamiliaEntity> {
    return this.familiaRepository.save(familia);
  }

  async delete(id: string): Promise<void> {
    await this.familiaRepository.delete({ id });
  }
}
