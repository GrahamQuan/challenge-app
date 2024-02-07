import express from 'express';

// middlewares
import { log } from './middlewares/log';
import { notFound } from './middlewares/notFound';

// routes
import root from './routes/root';
import about from './routes/about';

export const app = express();

// handle logging
app.use(log);

// root route
app.use('/', root);

// about route
app.use('/about', about);

// handle 404
// express is waterfall, so when no route match, it will run this
app.use(notFound);
