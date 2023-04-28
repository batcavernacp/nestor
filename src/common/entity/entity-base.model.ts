import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class EntityBaseModel<Model> {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(partial: Partial<Model>) {
    Object.assign(this, partial);
  }
}
