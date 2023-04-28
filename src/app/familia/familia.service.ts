import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamiliaModel } from 'src/models/familia/familia.model';
import { Repository } from 'typeorm';

@Injectable()
export class FamiliaService {
  constructor(
    @InjectRepository(FamiliaModel)
    private familiaRepository: Repository<FamiliaModel>,
  ) { }

  async findAll(): Promise<FamiliaModel[]> {
    return this.familiaRepository.find();
  }

  async create(familia: FamiliaModel): Promise<FamiliaModel> {
    return this.familiaRepository.save(familia);
  }
}
