import React, { useEffect, useState } from 'react';
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
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    if (!todos.length) {
      // 배열의 개수가 0이 아니면
      setFetching(false);
    }
  }, [fetching, todos]);

  const onButtonClick = (): void => {
    fetchTodos();
    setFetching(true);
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
      {fetching ? 'LOADING' : null}
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
