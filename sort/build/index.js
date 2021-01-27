"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
/*
const collection = new NumbersCollection([72, -1, 20, 3, -7]);
let sorter = new Sorter(collection);

sorter.sort();
console.log(sorter.collection);
*/
var str = "ElementarySchool";
var collection = new CharactersCollection_1.CharacterCollection(str);
var sorter = new Sorter_1.Sorter(collection);
sorter.sort();
console.log(sorter.collection);
