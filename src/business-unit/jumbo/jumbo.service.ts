import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JumboEntity } from './jumbo.entity';
import { JumboDto } from './jumbo.dto';

@Injectable()
export class JumboService {
  constructor(
    @InjectRepository(JumboEntity)
    private jumboRepository: Repository<JumboEntity>,
  ) {}

  create(jumbo: JumboDto) {
    return this.jumboRepository.save(new JumboEntity(jumbo));
  }
}
