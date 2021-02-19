import { Request, Response, NextFunction } from 'express';
import { styleTag } from '../style/styleTag';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void{
  if(req.session && req.session.loggedIn){
    next();
    return;
  }

  res.status(403);
  res.send(styleTag + `
  <h1>Not Permitted</h1>
  <a href="/auth/login" class="a_style a_orange">Login<a/>
  `);
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response): void{
    if(req.session && req.session.loggedIn){
      res.send(styleTag + `    
        <div>
          <h1>You are logged in</h1>
          <a href="/auth/logout" class="a_style a_orange">Logout</a>
          <a href="/protected" class="a_style a_blue">Mypage</a>
        </div>
      `);
    }else{
      res.send(styleTag + `
        <div>
          <h1>You are not logged in</h1>
          <a href="/auth/login" class="a_style a_orange">Login</a>
          <a href="/protected" class="a_style a_blue">Mypage</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void{
    if(req.session && req.session.loggedIn && req.session.username){
      const { username } = req.session;
   
      res.send(`<h1>Welcome to <strong style="color:orange">${username}</strong> MyPage</h1>`);
    }else{
      res.status(500);
      res.send('Server Error');
    }
  }
}