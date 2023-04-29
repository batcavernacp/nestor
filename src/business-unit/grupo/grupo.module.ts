import { Module } from '@nestjs/common';
import { GrupoResolver } from './grupo.resolver';
import { GrupoService } from './grupo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoEntity } from './grupo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoEntity])],
  providers: [GrupoService, GrupoResolver],
})
export class GrupoModule {}
