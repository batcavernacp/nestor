import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdemProducaoEntity } from './ordem-producao.entity';
import { OrdemProducaoDto } from './ordem-producao.dto';

@Injectable()
export class OrdemProducaoService {
  constructor(
    @InjectRepository(OrdemProducaoEntity)
    private ordemProducaoRepository: Repository<OrdemProducaoEntity>,
  ) {}

  create(ordemProducao: OrdemProducaoDto) {
    return this.ordemProducaoRepository.save(new OrdemProducaoEntity(ordemProducao));
  }

  findAll() {
    return this.ordemProducaoRepository.find();
  }
}
