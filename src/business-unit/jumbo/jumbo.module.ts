import { Module } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboResolver } from './jumbo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JumboEntity } from './jumbo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JumboEntity])],
  providers: [JumboService, JumboResolver],
  exports: [JumboService],
})
export class JumboModule {}
