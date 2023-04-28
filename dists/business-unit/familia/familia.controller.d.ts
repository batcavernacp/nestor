import { FamiliaService } from './familia.service';
export declare class FamiliaController {
    private readonly familiaService;
    constructor(familiaService: FamiliaService);
    getHello(): Promise<import("./familia.entity").FamiliaEntity[]>;
}
