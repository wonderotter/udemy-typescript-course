@classDecorator
class Boat {
  //@testDecorator
  color: string = 'red';
  
  //@testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(@parameterDecorator speed:string, @parameterDecorator generateWake:boolean): void{
    if(speed === 'fast'){
      console.log('swish');
    }else{
      console.log('nothing');
    }
    throw new Error();
  }
}

function logError(errorMessage: string){
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
  
    // desc.value => method
    desc.value = function() {
      try{
        method();
      }catch(e){
        console.log(errorMessage);
      }
    }
  }
}


function testDecorator(target: any, key: string): void{
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number){
  console.log('key:', key);
  console.log('index:', index);
}

function classDecorator(constructor: typeof Boat){
  console.log(constructor);
}