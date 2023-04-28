import { ClienteService } from './cliente.service';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    getById(id: number): Promise<import("./cliente.entity").ClienteEntity>;
}
