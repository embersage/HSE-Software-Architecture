import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import User from './models/User.js';
import Device from './models/Device.js';
import DevicesType from './models/DevicesType.js';
import InspectionsRule from './models/InspectionsRule.js';
import Notification from './models/Notification.js';
import Transaction from './models/Transaction.js';

config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  entities: [Device, DevicesType, InspectionsRule, Notification, Transaction, User],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
