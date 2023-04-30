import { forwardRef, Module } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboResolver } from './jumbo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JumboEntity } from './jumbo.entity';
import { CodigoBarrasModule } from '../codigo-barras/codigo-barras.module';
import { JumboBobinaResolver } from './jumbo-bobina.resolver';
import { JumboEntradaResolver } from './jumbo-entrada.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([JumboEntity])],
  providers: [JumboService, JumboResolver, JumboBobinaResolver, JumboEntradaResolver],
  exports: [JumboService],
})
export class JumboModule {}
