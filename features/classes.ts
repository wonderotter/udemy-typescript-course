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
  //color에 public을 안 쓴 이유는 car의 color에 새로운 필드를 재할당 하거나 생성하고 싶지 않아서
  // color는 vehicle에 속한 property이기 때문. modifier를 안 붙이면 속성이 parameter
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("부르릉!");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "pink");

car.startDrivingProcess();
