import Koa from 'koa';
import koaHelmet from 'koa-helmet';
import koaLogger from 'koa-logger';
import koaBodyparser from 'koa-bodyparser';

import router from './api';
import config from './config';
import errorHandler from './middlewares/errorMiddleware';

const helmet = koaHelmet();
const bodyparser = koaBodyparser({
  onerror: (err, ctx) => {
    console.error(`Bodyparser error: ${err}`);
    ctx.throw(400, 'Request with invalid syntax');
  }
});

const app = new Koa();

if (config.isDevelopment) app.use(koaLogger());

app
  .use(errorHandler)
  .use(helmet)
  .use(bodyparser)
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async ctx => ctx.throw(404, 'Page not found'));

export default app;
