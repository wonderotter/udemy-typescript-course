"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
/*
const collection = new NumbersCollection([72, -1, 20, 3, -7]);
let sorter = new Sorter(collection);

sorter.sort();
console.log(sorter.collection);
*/
// const str = "ElementarySchool";
// const collection = new CharacterCollection(str);
// const sorter = new Sorter(collection);
// sorter.sort();
// console.log(sorter.collection);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(-2);
linkedList.add(3);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
