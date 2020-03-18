// 매번 annotation을 해줄 필요 없고, 빈 array를 선언할 때만 type annotation을 표기해준다
const carMakers = ['ford', 'toyota', 'chevy'];
const strArrays: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatibale values
carMakers.push(100);

// Help with map
carMakers.map((car: string) => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('dkfldkf');
importantDates.push(new Date());
