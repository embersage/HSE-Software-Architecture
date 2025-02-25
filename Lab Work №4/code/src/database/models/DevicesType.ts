import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Relation } from 'typeorm';
import InspectionsRule from './InspectionsRule.js';
import Device from './Device.js';

@Entity()
class DevicesType {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  name!: string;

  @OneToMany(() => Device, (device) => device.devicesType, { onDelete: 'CASCADE' })
  devices!: Relation<Device>[];

  @OneToMany(() => InspectionsRule, (inspectionsRule) => inspectionsRule.description, { onDelete: 'CASCADE' })
  inspectionRules!: Relation<InspectionsRule>[];
}

export default DevicesType;
