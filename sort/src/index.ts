import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';

/*
const collection = new NumbersCollection([72, -1, 20, 3, -7]);
let sorter = new Sorter(collection);

sorter.sort();
console.log(sorter.collection); 
*/

const str = "ElementarySchool";
const collection = new CharacterCollection(str);

const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);

