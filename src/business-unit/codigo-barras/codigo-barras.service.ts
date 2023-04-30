import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JumboService } from '../jumbo/jumbo.service';
import { BobinaService } from '../bobina/bobina.service';
import { IJumbo } from '../jumbo/jumbo.interface';
import { gerarCodigoBarrasBobina, gerarCodigoBarrasJumbo } from './gerar-codigo-barras';
import { IBobina } from '../bobina/bobina.interface';

@Injectable()
export class CodigoBarrasService {
  constructor(
    @Inject(forwardRef(() => JumboService)) private readonly jumboService: JumboService,
    @Inject(forwardRef(() => BobinaService)) private readonly bobinaService: BobinaService,
  ) {}

  gerarCodigoBarrasJumbo(jumbo: IJumbo) {
    return gerarCodigoBarrasJumbo(jumbo);
  }

  async gerarCodigoBarrasBobina(bobina: IBobina) {
    if (typeof bobina.jumbo === 'string') {
      bobina.jumbo = await this.jumboService.findOne(bobina.jumbo);
    }
    return gerarCodigoBarrasBobina(bobina);
  }
}
