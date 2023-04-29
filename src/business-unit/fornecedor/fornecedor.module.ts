import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FornecedorEntity } from './fornecedor.entity';
import { FornecedorResolver } from './fornecedor.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FornecedorEntity])],
  providers: [FornecedorService, FornecedorResolver],
})
export class FornecedorModule {}
