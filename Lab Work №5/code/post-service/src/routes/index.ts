import { Router } from 'express';
import PostsRoutes from './PostsRoutes.js';

class Routes {
  router = Router();

  constructor() {
    this.router.use('/posts', PostsRoutes);
  }
}

export default new Routes().router;
