import { Router, Request, Response, NextFunction } from 'express';


// Request의 기능을 모두 가져오고 잘못된 타입만 오버라이드한다.
interface RequestWithBody extends Request{
  //override
  body: { [key:string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void{
  if(req.session && req.session.loggedIn){
    next();
    return;
  }

  res.status(403);
  res.send(`
  <h1>Not Permitted</h1>
  <a href="/login">Login<a/>
  `);
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" autocomplete="username"/>
      </div>
      <div>
        <label>password</label>
        <input type="password" name="password" autocomplete="current-password"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if(email && password && email === 'hi@hi.com' && password === 'password'){
    // mark this person as logged in
    req.session = { loggedIn: true, username: email };
    //redirect them to the root route
    res.redirect('/');
  }else{
    res.send('Invalid email or password');
  }

});

router.get('/', (req: Request, res: Response) => {
  if(req.session && req.session.loggedIn){
    res.send(`
      <div>
        <p>You are logged in</p>
        <a href="/logout">Logout</a>
        <a href="/protected">Mypage</a>
      </div>
    `);
  }else{
    res.send(`
      <div>
        <p>You are not logged in</p>
        <a href="/login">Login</a>
        <a href="/protected">Mypage</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
 if(req.session && req.session.loggedIn && req.session.username){
   const { username } = req.session;

   res.send(`Welcome to ${username} MyPage`);
 }else{
   res.status(500);
   res.send('Server Error');
 }
  
});

export { router };