import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  ManyToOne,
} from 'typeorm';
import DevicesType from './DevicesType.js';

@Entity()
class InspectionsRule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  description!: string;

  @ManyToOne(() => DevicesType, (devicesType) => devicesType.inspectionRules, { onDelete: 'CASCADE' })
  devicesType!: Relation<DevicesType>;
}

export default InspectionsRule;
