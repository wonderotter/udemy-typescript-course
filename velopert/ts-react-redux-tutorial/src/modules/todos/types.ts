import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

//function 알아서 찾아서 Action으로 만들어주는듯
export type TodosAction = ActionType<typeof actions>;

// 상태를 위한 타입 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
