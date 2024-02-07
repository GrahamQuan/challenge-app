import express from 'express';
import dotenv from 'dotenv';

// middlewares
import { log } from './middlewares/log';
import { notFound } from './middlewares/notFound';

// routes
import about from './routes/about';

// read PORT from env
// if we wanna change PORT, just change env file
dotenv.config({ path: '.env.local' });

const PORT = process.env.PORT || 3000;
const app = express();

// handle logging
app.use(log);

// root route
app.get('/', (req, res) => {
  res.send('welcome');
});

// about route
app.use(about);

// handle 404
// express is waterfall, so when no route match, it will run this
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
