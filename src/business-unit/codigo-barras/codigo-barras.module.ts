import { forwardRef, Module } from '@nestjs/common';
import { CodigoBarrasService } from './codigo-barras.service';
import { JumboModule } from '../jumbo/jumbo.module';
import { BobinaModule } from '../bobina/bobina.module';

@Module({
  imports: [forwardRef(() => JumboModule), forwardRef(() => BobinaModule)],
  providers: [CodigoBarrasService],
  exports: [CodigoBarrasService],
})
export class CodigoBarrasModule {}
