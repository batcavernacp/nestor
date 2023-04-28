import { Controller } from '@nestjs/common';
import { VendedorService } from './vendedor.service';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}
}
