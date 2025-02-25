import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
  ManyToOne,
} from 'typeorm';
import Transaction from './Transaction.js';
import Notification from './Notification.js';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  name!: string;

  @Column({ unique: true, type: 'text' })
  email!: string;

  @Column('text')
  passwordHash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column('text')
  role!: string;

  @OneToMany(() => Notification, (notification) => notification.user, { onDelete: 'CASCADE' })
  notifications!: Relation<Notification>[];

  @ManyToOne(() => Transaction, (transaction) => transaction.users, { onDelete: 'CASCADE' })
  transaction!: Relation<Transaction>;
}

export default User;
