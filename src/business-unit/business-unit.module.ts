import { Module } from '@nestjs/common';
import { FamiliaModule } from './familia/familia.module';
import { BobinaModule } from './bobina/bobina.module';
import { EntradaModule } from './entrada/entrada.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [FamiliaModule, BobinaModule, EntradaModule, ClienteModule],
  controllers: [],
  providers: [],
})
export class BusinessUnitModule {}
