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
  const { email, password } = req.body;

  if(email && password && email === 'hi@hi.com' && password === 'password'){
    // mark this person as logged in
    req.session = { loggedIn: true};
    //redirect them to the root route
    res.redirect('/');
  }else{
    res.send('Invalid email or password');
  }

});

export { router };