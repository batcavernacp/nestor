import { BobinaService } from './bobina.service';
export declare class BobinaController {
    private readonly bobinaService;
    constructor(bobinaService: BobinaService);
    findAll(): Promise<import("./bobina.entity").BobinaEntity[]>;
}
