import { Module } from '@nestjs/common';
import { FamiliaController } from './familia.controller';
import { FamiliaService } from './familia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamiliaEntity } from './familia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FamiliaEntity])],
  controllers: [FamiliaController],
  providers: [FamiliaService],
})
export class FamiliaModule {}
