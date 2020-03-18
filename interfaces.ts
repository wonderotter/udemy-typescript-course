interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: Vehicle): void => {
  const { name, year, broken } = vehicle;
  console.log(`Name: ${name}`);
  console.log(`Year: ${year}`);
  console.log(`broken: ${broken}`);
};

printVehicle(oldCivic);
