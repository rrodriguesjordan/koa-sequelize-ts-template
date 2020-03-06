import { Context } from 'koa';
import Router from 'koa-router';

const router = new Router({ prefix: '/books' });

router.get('/', async ctx => {
  ctx.body = { message: 'Books Routes' };
});

export const booksRoutes = router.routes();
