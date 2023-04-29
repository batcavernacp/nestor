import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamiliaEntity } from 'src/business-unit/familia/familia.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateFamiliaDto } from './dto/create-familia.dto';

@Injectable()
export class FamiliaService {
  constructor(
    @InjectRepository(FamiliaEntity)
    private familiaRepository: Repository<FamiliaEntity>,
  ) {}

  async findAll(): Promise<FamiliaEntity[]> {
    return this.familiaRepository.find();
  }

  async create(familia: CreateFamiliaDto): Promise<FamiliaEntity> {
    return this.familiaRepository.save(familia);
  }

  async findOne(id: string): Promise<FamiliaEntity> {
    return this.familiaRepository.findOneBy({ id });
  }

  async update(id: string, familia: CreateFamiliaDto): Promise<UpdateResult> {
    return this.familiaRepository.update({ id }, familia);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.familiaRepository.update({ id }, { deletedAt: new Date() });
  }
}
