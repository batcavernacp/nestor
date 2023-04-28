import { Module } from '@nestjs/common';
import { GrupoController } from './grupo.controller';
import { GrupoService } from './grupo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoEntity } from './grupo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoEntity])],
  controllers: [GrupoController],
  providers: [GrupoService],
})
export class GrupoModule {}
