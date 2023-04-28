import { Controller } from '@nestjs/common';
import { JumboService } from './jumbo.service';

@Controller('jumbo')
export class JumboController {
  constructor(private readonly jumboService: JumboService) {}
}
