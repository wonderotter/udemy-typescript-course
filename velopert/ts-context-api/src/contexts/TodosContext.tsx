import { createContext, Dispatch } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoState = Todo[];

const TodoStateContext = createContext<TodoState | undefined>(undefined);

type Action =
  | {
      type: 'CREATE';
      text: string;
    }
  | {
      type: 'TOGGLE';
      id: number;
    }
  | {
      type: 'REMOVE';
      id: number;
    };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchAction = createContext<TodosDispatch | undefined>(undefined);
