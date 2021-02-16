import { Router, Request, Response } from 'express';

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="em"/>
      </div>
      <div>
        <label>password</label>
        <input type="password" name="pa" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/login', (req: Request, res: Response) => {
  const {email} = req.body;

    res.send(email.toUpperCase());

});

export { router };