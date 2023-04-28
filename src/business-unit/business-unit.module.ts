import { Module } from '@nestjs/common';
import { FamiliaModule } from './familia/familia.module';
import { BobinaModule } from './bobina/bobina.module';
import { EntradaModule } from './entrada/entrada.module';
import { ClienteModule } from './cliente/cliente.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { GrupoModule } from './grupo/grupo.module';
import { JumboModule } from './jumbo/jumbo.module';
import { MovimentoModule } from './movimento/movimento.module';
import { OrdemProducaoModule } from './ordem-producao/ordem-producao.module';
import { PedidoModule } from './pedido/pedido.module';
import { VendedorModule } from './vendedor/vendedor.module';

@Module({
  imports: [
    BobinaModule,
    ClienteModule,
    EntradaModule,
    FamiliaModule,
    FornecedorModule,
    GrupoModule,
    JumboModule,
    MovimentoModule,
    OrdemProducaoModule,
    PedidoModule,
    VendedorModule,
  ],
  controllers: [],
  providers: [],
})
export class BusinessUnitModule {}
