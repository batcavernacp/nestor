import { Module } from '@nestjs/common';
import { FamiliaResolver } from './familia.resolver';
import { FamiliaService } from './familia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamiliaEntity } from './familia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FamiliaEntity])],
  providers: [FamiliaService, FamiliaResolver],
})
export class FamiliaModule {}
