import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JumboService } from '../jumbo/jumbo.service';
import { IJumbo } from '../jumbo/jumbo.interface';
import { gerarCodigoBarrasBobina, gerarCodigoBarrasJumbo } from './gerar-codigo-barras';
import { IBobina } from '../bobina/bobina.interface';

@Injectable()
export class CodigoBarrasService {
  constructor(
    @Inject(forwardRef(() => JumboService)) private readonly jumboService: JumboService,
  ) {}

  gerarCodigoBarrasJumbo(jumbo: IJumbo) {
    return gerarCodigoBarrasJumbo(jumbo);
  }

  async gerarCodigoBarrasBobina(bobina: IBobina) {
    return gerarCodigoBarrasBobina(bobina);
  }
}
