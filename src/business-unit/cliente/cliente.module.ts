import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteResolver } from './cliente.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity])],
  providers: [ClienteService, ClienteResolver],
})
export class ClienteModule {}
