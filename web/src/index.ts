import { User } from './models/User';

const user = new User({ name: "new record", age: 0 });

const on = user.on;

on('change', () => {
  console.log('change');
});

user.trigger('change');
console.log(user.get('name'));