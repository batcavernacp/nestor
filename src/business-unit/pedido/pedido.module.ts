import { Module } from '@nestjs/common';
import { PedidoResolver } from './pedido.resolver';
import { PedidoService } from './pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity])],
  providers: [PedidoService, PedidoResolver],
})
export class PedidoModule {}
