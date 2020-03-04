import Koa from 'koa';
import http from 'http';

const server = new Koa();
const port = process.env.PORT || 7373;

server.use(ctx => {
  ctx.body = { message: 'LoL' };
});

http.createServer(server.callback()).listen(port);
