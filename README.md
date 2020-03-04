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
