import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
} from 'typeorm';
import User from './User.js';
import Device from './Device.js';

@Entity()
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  type!: string;

  @CreateDateColumn()
  date!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => User, (user) => user.transaction, { onDelete: 'CASCADE' })
  users!: Relation<User>[];

  @OneToMany(() => Device, (device) => device.transaction, { onDelete: 'CASCADE' })
  devices!: Relation<Device>[];
}

export default Transaction;
