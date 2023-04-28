import { Module } from '@nestjs/common';
import { FornecedorController } from './fornecedor.controller';
import { FornecedorService } from './fornecedor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FornecedorEntity } from './fornecedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FornecedorEntity])],
  controllers: [FornecedorController],
  providers: [FornecedorService],
})
export class FornecedorModule {}
