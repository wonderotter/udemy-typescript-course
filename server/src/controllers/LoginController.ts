import { Request, Response } from 'express';
import { get, controller, post, bodyValidator } from './decorators';
import { styleTag } from '../style/styleTag';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void{
    res.send(styleTag + `
    <form method="POST">
      <div class="input_container">
        <label>Email</label>
        <input name="email" autocomplete="username"/>
      </div>
      <div class="input_container">
        <label>password</label>
        <input type="password" name="password" autocomplete="current-password"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
  }

  @post('/login')
  @bodyValidator('email','password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn : true, username: email };
      res.redirect('/');
    } else {
      res.send(styleTag + `
      <div>
        <h1>Invalid email or password</h1>
        <a href="/auth/login" class="a_style a_blue">Back To Login</a>
      </div>
      `);
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
}