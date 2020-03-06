import http, { Server } from 'http';
import server from './server';
import config from './config';

async function serverBootstrap(): Promise<Server> {
  return http.createServer(server.callback()).listen(config.port);
}

serverBootstrap()
  .then(httpServer => {
    console.log(`Server listening on address ${httpServer.address()}!`);
  })
  .catch(err => {
    setImmediate(() => {
      console.error('Unable to run the server because of the following error:');
      console.error(err);
      process.exit();
    });
  });
