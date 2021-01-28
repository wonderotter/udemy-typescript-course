import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

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

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(-2);
linkedList.add(3);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();


