import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import './App.css';

type AppProps = {
  todos: Todo[];
  fetchTodos: Function; //typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
};

const _App = ({ todos, fetchTodos, deleteTodo }: AppProps) => {
  const onButtonClick = (): void => {
    fetchTodos();
  };

  const onTodoClick = (id: number): void => {
    deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <li
          className="list_item"
          key={todo.id}
          onClick={() => onTodoClick(todo.id)}
        >
          {todo.title}
        </li>
      );
    });
  };

  return (
    <div>
      <button className="fetch_button" onClick={onButtonClick}>
        Fetch
      </button>
      <ol> {renderList()}</ol>
    </div>
  );
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
