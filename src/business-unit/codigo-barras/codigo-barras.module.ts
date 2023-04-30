import { Module } from '@nestjs/common';
import { CodigoBarrasService } from './codigo-barras.service';
import { JumboModule } from '../jumbo/jumbo.module';
import { CodigoBarrasJumboResolver } from './codigo-barras-jumbo.resolver';
import { CodigoBarrasBobinaResolver } from './codigo-barras-bobina.resolver';

@Module({
  imports: [JumboModule],
  providers: [CodigoBarrasService, CodigoBarrasJumboResolver, CodigoBarrasBobinaResolver],
})
export class CodigoBarrasModule {}
