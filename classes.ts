// ParentClass or SuperClass
class Vehicle {
  protected honk(): void {
    console.log("빵빵!");
  }
}

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

const car = new Car();
car.startDrivingProcess();
