import { User } from "./models/User";

const user = new User({ name: 'myname', age: 20 });

user.set({ name: "new_name" });

console.log(user.get('name'));
console.log(user.get('age'));