class Boat {
  @testDecorator
  color: string = 'red';
  
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(): void{
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


function testDecorator(target:any, key:string): void{
  console.log(target.color);
}