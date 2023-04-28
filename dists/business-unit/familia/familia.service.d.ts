import { FamiliaEntity } from 'src/business-unit/familia/familia.entity';
import { Repository } from 'typeorm';
export declare class FamiliaService {
    private familiaRepository;
    constructor(familiaRepository: Repository<FamiliaEntity>);
    findAll(): Promise<FamiliaEntity[]>;
    create(familia: FamiliaEntity): Promise<FamiliaEntity>;
}
