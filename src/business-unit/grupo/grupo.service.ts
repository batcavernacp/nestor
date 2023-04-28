import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrupoEntity } from './grupo.entity';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(GrupoEntity)
    private grupoRepository: Repository<GrupoEntity>,
  ) {}
}
