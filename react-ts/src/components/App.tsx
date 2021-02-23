import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

type AppProps = {
  todos: Todo[];
  fetchTodos(): any; //TODO
};

function _App({ todos, fetchTodos }: AppProps) {
  const onButtonClick = (): void => {
    fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
