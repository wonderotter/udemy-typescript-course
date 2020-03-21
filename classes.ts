// ParentClass or SuperClass
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("빵빵!");
  }
}

const vehicle = new Vehicle("white");
console.log(vehicle.color);

// Car: child cass
class Car extends Vehicle {
  private drive(): void {
    console.log("부르릉!");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("brown");
car.startDrivingProcess();
