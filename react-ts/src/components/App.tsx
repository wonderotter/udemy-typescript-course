import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

type AppProps = {
  todos: Todo[];
  fetchTodos(): any; //TODO
};

function _App() {
  return <div>Hi!</div>;
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
