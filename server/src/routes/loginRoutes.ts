import { Router, Request, Response } from 'express';

// Request의 기능을 모두 가져오고 잘못된 타입만 오버라이드한다.
interface RequestWithBody extends Request{
  //override
  body: { [key:string]: string | undefined }
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email} = req.body;

  if(email){ // type guard
    res.send(email.toUpperCase());
  }else{
    res.send('You must provide an email');
  }

});

export { router };