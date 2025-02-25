import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import User from './User.js';

@Entity()
class Notification {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  message!: string;

  @CreateDateColumn()
  sentDate!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.notifications, { onDelete: 'CASCADE' })
  user!: Relation<User>;
}

export default Notification;
