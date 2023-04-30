import { forwardRef, Module } from '@nestjs/common';
import { BobinaService } from './bobina.service';
import { BobinaResolver } from './bobina.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BobinaEntity } from './bobina.entity';
import { CodigoBarrasModule } from '../codigo-barras/codigo-barras.module';

@Module({
  imports: [TypeOrmModule.forFeature([BobinaEntity]), forwardRef(() => CodigoBarrasModule)],
  providers: [BobinaService, BobinaResolver],
  exports: [BobinaService],
})
export class BobinaModule {}
