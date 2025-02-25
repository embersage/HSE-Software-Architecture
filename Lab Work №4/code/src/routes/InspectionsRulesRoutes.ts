import { Router } from 'express';
import InspectionsRuleController from '../controllers/InspectionsRuleController.js';
import checkAuth from '../middlewares/checkAuth.js';

class InspectionsRulesRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', InspectionsRuleController.getAll);
    this.router.get('/:id', InspectionsRuleController.getOne);
    this.router.post('/', checkAuth, InspectionsRuleController.create);
    this.router.put('/:id', checkAuth, InspectionsRuleController.edit);
    this.router.delete('/:id', checkAuth, InspectionsRuleController.delete);
  }
}

export default new InspectionsRulesRoutes().router;
