import Router from 'koa-router';

const router = new Router({ prefix: '/users' });

router.get('/', async ctx => {
  ctx.body = { message: 'User Routes' };
});

export const userRoutes = router.routes();
