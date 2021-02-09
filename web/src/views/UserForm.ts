import { User, UserProps } from '../models/User'; 
import { View } from "./View";

export class UserForm extends View<User, UserProps>{
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.change-name': this.onSetNameClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if(input){
      const name = input.value;

      this.model.set({ name });
    }
  }

  template(): string {
    return `
    <div class="form">
      <h1>User Form</h1>
      <p>User name: ${this.model.get('name')}</p>
      <p>User age: ${this.model.get('age')}</p>
      <input type="text" />
      <button class="change-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
    </div>
    `
  }
}          