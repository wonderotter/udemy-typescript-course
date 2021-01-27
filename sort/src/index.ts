class Sorter {
  constructor(public collection: number[] | string){}

  sort(){
    const { length } = this.collection;

    if(this.collection instanceof Array){
      for(let i = 0; i < length; i++){
        for(let j = 0; j < length - i - 1; j++){
  
          // All of this only works if collection is number[]
          // If collection is an array of numbers
          if(this.collection[j] > this.collection[j + 1]){
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = leftHand; 
          }
        }
      }
    }
    
    // Only going to work if collection is a string
    // If collection is a string, do this login instead:
    // ~~login to compare and swap characters in a string
    if(typeof this.collection === 'string'){
      
    }
  }
}

const sorter = new Sorter([10, 0, -1, 2]);
sorter.sort();
console.log(sorter.collection);