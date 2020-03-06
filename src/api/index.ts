import Router from 'koa-router';

import { userRoutes, booksRoutes } from './routes';

const router = new Router({ prefix: '/api' });
router.use(userRoutes).use(booksRoutes);

export default router;
