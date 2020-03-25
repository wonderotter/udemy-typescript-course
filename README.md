# Typescript: The Complete Developer's Guide [2020]

Udemy typescript 강의 정리 & project

강의 링크 : https://www.udemy.com/course/typescript-the-complete-developers-guide

---

## 섹션 1: Getting Started with Typescript

### The TS Type System

- Helps us catch erros during development
- Uses 'type annotations' to analyze our code
- Only active during development
- Doesn't provide any performance optimization

### 실행 순서

Typescript Code(Javascript with type annotations)

1. Typescript Compiler
2. Plain old Javascript
3. Browser executes plain Javascript, has no idea we wrote Typescript

### Summary

- Writing Typescript is the same as writing Javascript with some "extra documentation"
- Typescript has no effect on how our code gets executed by the browser or Node
- It is best to think of Typescript as being like a friend sitting behind you while you are coding.

### Get started

```
npm install -g typescript ts-node
```

```
tsc index.ts
-> index.js로 변환
node index.js
-> index.js 실행
```

```
ts-node index.ts
//javascript로 변환하고 한번에 실행
```

## 섹션 2: What is a Type System?

### Course Goal

1. Syntax + Features - Understand basic types in TS - Function typing + annotations - Type définition files - Arrays in TS - Modules systems
   \_ Classes + Refresher on OOP
2. Design Patterns - Projects

### Type

Easy way to refer to the different properties

- functions that a value has

value(우리가 변수에 지정할 수 있는 어떤 것 ex) string, number..)

예) "red"가 뭐야? 라고 물을 때 우리는
두가지 대답을 할 수 있다.
첫 번째는 string이다.
두 번째는 string이 가지는 properties와 method를 가진 value를 의미한다.

string은 concat(), charCodeAt(), indexOf() 등등 많은 property 와
메소드를 가지고 있다. 이렇게 다 설명하기는 불편하기 때문에
string이라고 한 단어로 요약해서 말하는 것이다.

Interface Todo는 Todo라는 새로운 type을 만들어 낸것
Response.data가 뭐냐고 물을 때 Todo라고 대답하는 것은
id, title, completed를 속성으로 갖는 Object라는 것을 요약해서 말하는것.
Id, title, completed는 Todo라는 type의 property다.

typescript는 모든 value가 type을 갖는다.

```
Type		Values That Have This Type
string		'hi there' ''
Number		.0025 -20
Boolean		true false
Date		new Date()
Todo		{id:1, completed:true, title:'trash'}
```

### Types

1. Primitive Types : - number, boolean, void, undefined - string, symbol, null
2. Object Types : - functions, arrays - classes, objects

### 왜 우리는 type에 대해 신경써야할까?

    - Types는 에러 코드를 분석하기 위한 typescript compiler에 의해 사용된다.
    - Types를 사용하면 다른 엔지니어가 코드베이스에 어떤 값이 흐르고 있는지 이	해할 수 있다.

- 코드베이스: 특정 시스템, 애플리케이션, 컴포넌트 따위를 빌드할 때 사용되는 소스코드의 전체집합, 그것을 담은 저장소 -단일 저장소(ex: subversion)일수도 있고, 루트 커밋을 공유하는 여러 저장소(분산 cvs: ex) git)일수도 있음

* Where do we use types?
  -> everywhere!!

## 섹션 3: Type Annotations and Inference

1. Type annotations : 우리가 typescript에게 변수가 가리킬 value의 타입이 무엇인지 추가해주는 코드
   -> developers tell typescript the type
2. Type inference: typecript가 변수가 가리키는 value의 타입이 무엇인지 알아내려고 시도하는 것
   -> typescript guesses the type

### Understanding Inference

```
let apples = 5;
-> typescript가 변수의 type을 자동으로 알아낸다
let apples;
apples = 5;
-> typescript가 알아내지 못한다.(any)
```

Initialization(초기화)를 통해서만 inference가 가능하다.

### typescript가 알아서 type을 알아내는데 왜 annotation을 해줘야 하는 걸까?

JSON.parse('false') -> boolean
JSON.parse('4') -> number
JSON.parse('{"value":5}') -> {value:number}
JSON.parse('{"name":"alex"}') -> {name: string}

JSON.parse를 통해서 얻는 type은 값에 따라 다양하다. 따라서 typescript는 type을 예상할 수 가 없다. 이것을 ts는 any type으로 부르기로 한다(즉 any type의 의미는 ts가 어떤 타입의 값을 리턴 받을 지 모른다는 의미다)

-> 이것은 매우 안 좋은것. ts가 타입을 체크하지 못하면 오류를 잡아내지 못하기 때문에 의미가 없다.

따라서 몇몇의 경우는 annotation을 통해 typescript에게 type을 알려줘야한다

1. When a fucntion returns the 'any' type and we need to clarify the value

```
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

//coordinates.dsfdsfsdfsdf -> error를 잡는다
// any type일때는 못잡음.
```

2. When we declare a variable on one line then initialize it later

```
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i=0; i< words.length; i++){
  if(words[i] === 'blue'){
    foundWord = true;
  }
}
```

3. When we want a variable to have a type that cant't be inferred

```
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

```

## 섹션 4. Annotations with functions and objects

1. 함수에 대한 type annotation -> 어떤 타입의 인자를 함수가 받을건지, 어떤 타입의 값을 함수가 리턴할 것 인지 typescript에게 말하기 위해 추가하는 코드

2. 함수에 대한 type inference -> typescript가 어떤 타입의 값을 함수가 리턴할 것인지 알아내려고 시도하는 것

-> 이 강의에서는 arguments, return value 모두 annotation을 한다.
return value는 ts가 자동으로 type infercne를 해주지만 annotation을 할 것 이다.

## 섹션 5. Mastering Typed Arrays

Typed Arrays : 일관된 type의 값이 element인 배열

### Why do we care?

- TS는 배열로부터 값을 추출할 때 type inference를 할 수 있다.

```
const cars = carMakers[0];
const myCar = carMakers.pop();
```

- TS는 type이 안 맞는 값들을 배열에 넣는 것을 방지해준다
- map, forEach, reduce같은 함수들의 도움을 받을 수 있다

```
carMakers.map((car: string) => {
return car;
})
```

- 유연함 - 배열들은 여전히 다양한 다른 타입들을 가질 포함할 수 있다.

```
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('dkfldkf');
importantDates.push(new Date());
```

### When to Use Typed Arrays

임의의 정렬 순서를 가진 레코드(기록)의 모음을 표현할때마다 필요하다!

## 섹션 6. Tuples in Typescript

Tuple: 각 요소가 한 레코드의 일부 속성을 나타내는 구조와 같은 배열

```
// annotation을 통해 순서를 바꿔서 입력할 수 없고 각 속성의 의미를 알게된다.
const tuple_pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
```

### Why Tuples?

// tuple이 object보다 한 눈에 알아보기 힘들다. 잘 사용하지 않음.

```
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354
}
```

하지만 해당 기능은 ts의 공식 문서에 있는 ts 특징이고 나중에 실습할 때 다룰 예정.

## 섹션 7. The All-Important Interface

### Interface란?

object의 속성 이름과 value types를 묘사하는 새로운 type을 만들어 내는 것.

- 하나의 interface로 굉장히 다른 objects의 다른 속성들으 모형을 묘사할 수 있다.
- 이 매우 다른 objects이 다른 함수들과 상호작용하게 만들 수 있다.
  ex) printSummary

```
interface Reportable {
  //name: string;
  //year: Date;
  //broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  }
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `color: ${this.color}`;
  }
};

// summary property만 있어도 오류를 띄우지 않는다.
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

```

Interface Reportable
: Reportable is a gatekeeper to printSummary

oldCivic, drink
: Must satisfy the 'Reportable' interface to work with printSummary

## 섹션 8. Building functionality with Classes

- Instance Method Modifiers

* public : This method can be called any where, any time
* private: This method can only be called by other methods in this class
* protected: This method can be called by other methods in this class, or by other methos in child classes

- 부모 메소드를 오버라이딩 하는 경우 modifier 수정 불가능.

### Fields in classes

- constructor shortcut example

```
class Vehicle {
  constructor(public color: string)
}

// 위는 아래 처럼 풀어 쓸 수 있다.
class Vehicle {
  color: string;

  constructor(color: string){
    this.color = color;
  }
}
```

### Fields with Inheritance

- 상속을 받으면 child class는 constructor, methods 모두 자동으로 부모 클래스 것도 물려받게 된다.

```
// ParentClass or SuperClass
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("빵빵!");
  }
}

// Car: child cass
class Car extends Vehicle {
  //color에 public을 안 쓴 이유는 car의 color에 새로운 필드를 재할당 하거나 생성하고 싶지 않아서
  // color는 vehicle에 속한 property이기 때문. modifier를 안 붙이면 parameter, 붙이면 car의 property로 재할당된다.
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("부르릉!");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "pink");

```

## 섹션 9. Design Patterns with Typescript

get started

```
// Tool to help us run Typescript in the browser
npm install -g parcel-bundler
```

Parcel Bundler -> index.html - script of 'index.ts' -> compile it to JS then replace this script tag

src 폴더에 index.ts를 만들고 index.html에 넣어준뒤

```
parcel index.html
```

![변환된 ts](https://user-images.githubusercontent.com/45552388/77293752-49a5aa00-6d26-11ea-933e-a3819cf94d3e.png)
parcel bundler가 ts파일을 js파일로 변환시킨다.

## Map project structure

'src' Folder
index.ts - Map.ts - User.ts - Company.ts

파일명을 대문자 만드는 규칙
: 주 목적이 class를 export하는 것일 때 대문자를 사용한다.
index.ts(소문자로 시작하는 파일) :

- 주목적이 import
- anytime you have a file that either serves as something like the index.tx file
  so come in root of your application where a file that exports plain objects, plain functions or constants.

  ## Generating Random Data

  위도, 경도 데이터를 random하게 만들어준다.

  ```
  npm install faker;
  ```

## Type Definition Files

Typescript Code -> Type definition file -> JS Library

Type Definition을 가지고 있지 않으면 module import할 때 오류가 뜬다.
-> Could not find a declaration file for module 'faker'.
-> 수동적으로 type definition을 설치해줘야함.

Definitely Typed Naming Scheme
@types/{library name} -> @types/faker

대부분 type definition file이 존재한다.
to install that type definition file, we're going to reach into a project called 'definitely typed'
Definitely Typed: the name of the project that includes all these precreated or pregenerated type definition

npmjs.com 접속 -> @types/faker ->
Details쪽 보면
Files were epxorted from https://github.com/DefinitelyTypes/DefinitelyTypes/tree/master....
DefinitelyTypes-> Anytime you see that term they're talking about type definition files for javascript libraries.

```
npm install @types/faker
```
