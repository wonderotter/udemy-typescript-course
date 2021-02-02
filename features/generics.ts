class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number{
    return this.collection[index];
  }
}

class ArrayofStrings {
  constructor(public collection: string[]) {}

  get(index: number): string{
    return this.collection[index];
  }
}

class ArrayOfAnyting<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnyting(['a','b']);

// Example of generics with functions

function printStrings(arr: string[]): void{
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void{
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void{
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

printAnything(['a', 'b', 'c']);