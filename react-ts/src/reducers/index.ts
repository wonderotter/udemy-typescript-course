import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
// typescript is not taking a look at the object tht we are passing into combineReducers
// it's going to take a look at all the different properties(todos)
// todos가 Todo[]랑 match up됨.
// in this case, typescript is making sure that this function right here returns a value of type array todos
// todosReducer가 하는게 결국은 StoreState의 상태로 만들게 하고 싶다는 뜻
