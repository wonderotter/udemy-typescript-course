import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logToDo(ID, title, finished);
});

const logToDo = (ID: number, title: string, finished: boolean) => {
  console.log(
    `The Todo with ID : ${ID}
    Has a title of : ${title} 
    Is it finished? ${finished}`
  );
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}
