import http from 'http';
import logger from 'js-logger';
import app from './server/config/app';
import { port } from './server/config/config';


logger.useDefaults();


app.set('port', port);

const server = http.createServer(app);

server.listen(port);

logger.info(`Library is running ${port}/`);
