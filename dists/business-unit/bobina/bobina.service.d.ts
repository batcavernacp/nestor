import { Repository } from 'typeorm';
import { BobinaEntity } from './bobina.entity';
export declare class BobinaService {
    private bobinaRepository;
    constructor(bobinaRepository: Repository<BobinaEntity>);
    findAll(): Promise<BobinaEntity[]>;
}
