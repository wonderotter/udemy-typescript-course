import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserEdit extends View<User, UserProps>{
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }

  //override
  regionsMap(): { [key:string]: string }{
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }
}