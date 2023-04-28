import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JumboEntity } from './jumbo.entity';

@Injectable()
export class JumboService {
  constructor(
    @InjectRepository(JumboEntity)
    private jumboRepository: Repository<JumboEntity>,
  ) {}
}
