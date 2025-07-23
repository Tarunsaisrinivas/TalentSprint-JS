let no1 = 10;
let no2 = 20;

console.log(`Before swap: no1 = ${no1}, no2 = ${no2}`);

no1 = no1 + no2;
no2 = no1 - no2;
no1 = no1 - no2;

console.log(`After swap: no1 = ${no1}, no2 = ${no2}`); // 20 10

// with temp
let temp = no1;
no1 = no2;
no2 = temp;
console.log(`With Temp After swap: no1 = ${no1}, no2 = ${no2}, temp = ${temp}`);

let arr = [10, 20];
console.log(`Before swap: arr[0] = ${arr[0]}, arr[1] = ${arr[1]}`);
console.log(`After swap: arr[0] = ${arr[1]}, arr[1] = ${arr[0]}`);
