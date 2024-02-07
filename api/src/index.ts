import dotenv from 'dotenv';
import { app } from './app';

// read PORT from env
// if we wanna change PORT, just change env file
dotenv.config({ path: '.env.local' });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
