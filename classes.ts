// ParentClass or SuperClass
class Vehicle {
  drive(): void {
    console.log('hellllo!');
  }
  honk(): void {
    console.log('빵빵!');
  }
}

// Car: child cass
class Car extends Vehicle {
  //override
  drive(): void {
    console.log('부르릉!');
  }
}

const car = new Car();
car.drive();
car.honk();
