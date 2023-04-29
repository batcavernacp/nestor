import { Module } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboResolver } from './jumbo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JumboEntity } from './jumbo.entity';
import { GrupoModule } from '../grupo/grupo.module';

@Module({
  imports: [TypeOrmModule.forFeature([JumboEntity])],
  providers: [JumboService, JumboResolver],
})
export class JumboModule {}
