import { Module } from '@nestjs/common';
import { FamiliaController } from './familia.controller';
import { FamiliaService } from './familia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamiliaModel } from 'src/models/familia/familia.model';

@Module({
  imports: [TypeOrmModule.forFeature([FamiliaModel])],
  controllers: [FamiliaController],
  providers: [
    FamiliaService,
  ],
  exports: [
    FamiliaService,
  ]
})
export class FamiliaModule {
}
