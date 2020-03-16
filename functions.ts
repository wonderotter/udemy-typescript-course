const add = (a: number, b: number): number => {
  return a + b;
};

// return value의 type inference를 사용하지 않는 이유
const subtract = (a: number, b: number) => {
  a - b; //return을 쓰는 것을 잊었을 때 어떤 오류도 발생시키지 않는다.
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};
