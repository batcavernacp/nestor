import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdemProducaoEntity } from './ordem-producao.entity';

@Injectable()
export class OrdemProducaoService {
  constructor(
    @InjectRepository(OrdemProducaoEntity)
    private ordemProducaoRepository: Repository<OrdemProducaoEntity>,
  ) {}
}
