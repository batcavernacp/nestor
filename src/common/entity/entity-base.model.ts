import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export abstract class EntityBaseModel<Model> {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  @Exclude({ toClassOnly: true }) // id não precisa enviar quando vai criar
  id: string;

  @CreateDateColumn()
  @ApiProperty()
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty()
  @Exclude()
  updateAt: Date;

  @DeleteDateColumn()
  @Exclude()
  deletedAt: Date;

  constructor(partial: Partial<Model>) {
    Object.assign(this, partial);
  }
}
