import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import log from 'js-logger';
import * as routes from './routes';
import { dbUrl } from './config';
import '../app/models';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { useMongoClient: true });

let db = mongoose.connection;

db.on('error', () => {
  log.warn('mongodb connection error');
});

db.on("open", () => {
  log.info("mongodb is connected!!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/users', routes.User);
app.use('/api/v1/roles', routes.Role);

app.get('*', (req, res) => {
  return res.status(200).send({ message: 'Welcome to library' });
});

export default app;
