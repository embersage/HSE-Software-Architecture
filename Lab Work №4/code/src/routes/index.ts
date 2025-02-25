import { Router } from 'express';
import UsersRoutes from './UsersRoutes.js';
import NotificationsRoutes from './NotificationsRoutes.js';
import DevicesTypesRoutes from './DevicesTypesRoutes.js';
import InspectionsRulesRoutes from './InspectionsRulesRoutes.js';

class Routes {
  router = Router();

  constructor() {
    this.router.use('/users', UsersRoutes);
    this.router.use('/notifications', NotificationsRoutes);
    this.router.use('/devices-types', DevicesTypesRoutes);
    this.router.use('/inspections-rules', InspectionsRulesRoutes);
  }
}

export default new Routes().router;
