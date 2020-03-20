class Vehicle {
  drive(): void {
    console.log('hellllo!');
  }
  honk(): void {
    console.log('빵빵!');
  }
}

// vehicle : instance
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
