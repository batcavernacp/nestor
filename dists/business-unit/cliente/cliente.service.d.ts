import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
export declare class ClienteService {
    private bobinaRepository;
    constructor(bobinaRepository: Repository<ClienteEntity>);
    findById(id: number): Promise<ClienteEntity>;
}
