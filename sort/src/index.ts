import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const collection = new NumbersCollection([0, -1, 20, 3, -7]);
const sorter = new Sorter(collection);

sorter.sort();
console.log(sorter.collection);