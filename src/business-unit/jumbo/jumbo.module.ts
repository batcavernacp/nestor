import { Module } from '@nestjs/common';
import { JumboService } from './jumbo.service';
import { JumboController } from './jumbo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JumboEntity } from './jumbo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JumboEntity])],
  providers: [JumboService],
  controllers: [JumboController],
})
export class JumboModule {}
