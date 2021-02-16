import express from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(router);

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});