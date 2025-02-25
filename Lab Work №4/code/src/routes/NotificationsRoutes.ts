import { Router } from 'express';
import NotificationController from '../controllers/NotificationController.js';
import checkAuth from '../middlewares/checkAuth.js';

class NotificationsRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', NotificationController.getAll);
    this.router.get('/:id', NotificationController.getOne);
    this.router.post('/', checkAuth, NotificationController.create);
    this.router.put('/:id', checkAuth, NotificationController.edit);
    this.router.delete('/:id', checkAuth, NotificationController.delete);
  }
}

export default new NotificationsRoutes().router;
