import http, { Server } from 'http';
import app from './app';
import config from './config';

async function serverBootstrap(): Promise<Server> {
  return http.createServer(app.callback()).listen(config.port);
}

serverBootstrap()
  .then(() => {
    console.log(`Server listening on port ${config.port}!`);
  })
  .catch(err => {
    setImmediate(() => {
      console.error('Unable to run the server because of the following error:');
      console.error(err);
      process.exit();
    });
  });
