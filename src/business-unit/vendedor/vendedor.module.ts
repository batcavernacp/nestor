import { Module } from '@nestjs/common';
import { VendedorController } from './vendedor.controller';
import { VendedorService } from './vendedor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendedorEntity } from './vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VendedorEntity])],
  controllers: [VendedorController],
  providers: [VendedorService],
})
export class VendedorModule {}
