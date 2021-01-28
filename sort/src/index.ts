import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([72, -1, 20, 3, -7]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(-2);

linkedList.sort();
linkedList.print();


