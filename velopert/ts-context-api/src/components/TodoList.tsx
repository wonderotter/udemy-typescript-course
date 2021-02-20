import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = [
    {
      id: 1,
      text: 'React 공부하기',
      done: true,
    },
    {
      id: 2,
      text: 'React랑 typescript 공부하기',
      done: false,
    },
    {
      id: 3,
      text: 'gatsbyjs 공부하기',
      done: false,
    },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
