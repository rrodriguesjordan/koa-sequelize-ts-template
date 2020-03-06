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
    console.error(`Erro no bodyparser: ${bodyparser}`);
    ctx.throw(400, 'Requisição com sintaxe inválida');
  }
});

const server = new Koa();

if (config.isDevelopment) server.use(koaLogger());

server
  .use(errorHandler)
  .use(helmet)
  .use(bodyparser)
  .use(router.routes())
  .use(router.allowedMethods());

server.use(async ctx => ctx.throw(404, 'Página não encontrada'));

export default server;
