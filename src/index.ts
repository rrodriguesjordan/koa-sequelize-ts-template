import Koa from 'koa';
import http from 'http';
import Config from './config/config';

const server = new Koa();
const port = process.env.PORT || 7373;

server.use(ctx => {
  ctx.body = Config;
});

http.createServer(server.callback()).listen(port);
