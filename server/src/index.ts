import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi There!</h1>
    </div>
  `);
});

const port:number = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});