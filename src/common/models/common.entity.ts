import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CommonEntity {
  @Column({ name: 'active', nullable: true, default: true })
  active: boolean;

  @CreateDateColumn({ name: 'created_date', nullable: true })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date', nullable: true })
  updatedDate: Date;

  @DeleteDateColumn({ name: 'deleted_date', nullable: true })
  deletedDate: Date;
}
