import { Router } from 'express';
import DevicesTypeController from '../controllers/DevicesTypeController.js';
import checkAuth from '../middlewares/checkAuth.js';

class DevicesTypesRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', DevicesTypeController.getAll);
    this.router.get('/:id', DevicesTypeController.getOne);
    this.router.post('/', checkAuth, DevicesTypeController.create);
    this.router.put('/:id', checkAuth, DevicesTypeController.edit);
    this.router.delete('/:id', checkAuth, DevicesTypeController.delete);
  }
}

export default new DevicesTypesRoutes().router;
