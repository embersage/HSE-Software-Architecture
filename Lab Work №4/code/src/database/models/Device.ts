import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Relation,
  ManyToOne,
} from 'typeorm';
import DevicesType from './DevicesType.js';
import Transaction from './Transaction.js';

@Entity()
class Device {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  name!: string;

  @Column('text')
  condition!: string;

  @Column('double precision')
  base_price!: number;

  @Column('double precision')
  evaluation!: number;

  @CreateDateColumn()
  evaluationDate!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => DevicesType, (devicesType) => devicesType.devices, { onDelete: 'CASCADE' })
  devicesType!: Relation<DevicesType>;

  @ManyToOne(() => Transaction, (transaction) => transaction.devices, { onDelete: 'CASCADE' })
  transaction!: Relation<Transaction>;
}

export default Device;
