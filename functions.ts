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

const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined
};

// never : never going to reach the end of this function
// 절대 return 값이 없을 때만 사용한다,
const throwError = (message: string): never => {
  throw Error(message);
};

// return하는 경우가 있다면 never를 사용할 수 없다.
const throwErro2 = (message: string): string => {
  if (!message) {
    throw Error(message);
  }

  return message;
};
