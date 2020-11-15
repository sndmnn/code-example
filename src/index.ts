import express from 'express';

import AppError from './AppError';
import errorHandler from './errorHandler';

const app = express();

app.get(
  '/status',
  (request, response) => response.status(200).json({ msg: 'ok' }),
);

app.get(
  '/error',
  (request, response) => { throw new AppError(500, 'This is an error', 1); },
);

app.use(errorHandler);

app.listen(3333);
