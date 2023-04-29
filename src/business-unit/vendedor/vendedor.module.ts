import { Module } from '@nestjs/common';
import { VendedorResolver } from './vendedor.resolver';
import { VendedorService } from './vendedor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendedorEntity } from './vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VendedorEntity])],
  providers: [VendedorService, VendedorResolver],
})
export class VendedorModule {}
