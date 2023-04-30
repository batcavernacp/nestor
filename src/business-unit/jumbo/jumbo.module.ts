import { forwardRef, Module } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboResolver } from './jumbo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JumboEntity } from './jumbo.entity';
import { CodigoBarrasModule } from '../codigo-barras/codigo-barras.module';

@Module({
  imports: [TypeOrmModule.forFeature([JumboEntity]), forwardRef(() => CodigoBarrasModule)],
  providers: [JumboService, JumboResolver],
  exports: [JumboService],
})
export class JumboModule {}
