import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';
import './App.css';

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
      return (
        <li className="list_item" key={todo.id}>
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
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
