import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void{
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
  }
}