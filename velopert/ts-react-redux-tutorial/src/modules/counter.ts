import { createAction, ActionType, createReducer } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)(); // () => ({ type: INCREASE })
export const decrease = createAction(DECREASE)(); // () => ({ type: DECREASE })
export const increaseBy = createAction(INCREASE_BY)<number>(); // (payload: number) => ({ type: INCREASE_BY, payload })

/*
// 액션 객체들에 대한 type 준비하기
// 리듀서를 작성 할 때 action 파라미터의 타입을 설정하기 위해서 우리가 만든 모든 액션들의 typescript 타입을 준비해야됨
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
// ReturnType: 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸타입
*/

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

/*
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
*/

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

/*
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(INCREASE, (state) => ({ count: state.count + 1 }))
  .handleAction(DECREASE, (state) => ({ count: state.count - 1 }))
  .handleAction(INCREASE_BY, (state, action) => ({
    count: state.count + action.payload,
  }));
*/

export default counter;
