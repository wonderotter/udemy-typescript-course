const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi = ['brown', true, 40];
// pepsi[0] = true // 속성의 순서를 외우는 것이기 때문에 순서를 바꾸면 data의 model은 망가지게 된다.
const tuple_pepsi: [string, boolean, number] = ['brown', true, 40];
// tuple_pepsi[0] = 40; //error

// Type alias
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
