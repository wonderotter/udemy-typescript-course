import { User } from "./models/User";

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('hello1');
});
user.on('change', () => {
  console.log('hello2');
});

user.on('click', () => {
  console.log('click!');
});

user.trigger('change');
