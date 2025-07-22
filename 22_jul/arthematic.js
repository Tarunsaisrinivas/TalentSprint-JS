// + , - , * , / , %,**
// User input for two numbers and an operator
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");
// let operator = prompt("Enter operator (+, -, *, /, %, **):");

// let result = eval(num1 + operator + num2);
// alert(result);

// Arithmetic operations using two numbers
let num1 = "25";
let num2 = "B";

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
console.log(`${num1} ** 2 = ${num1 ** 2}`);

// without temp swap

let no1 = 10;
let no2 = 20;

console.log(`Before swap: no1 = ${no1}, no2 = ${no2}`);

no1 = no1 + no2; //30
no2 = no1 - no2; //10
no1 = no1 - no2; //20

console.log(`After swap: no1 = ${no1}, no2 = ${no2}`); // 20 10

// with temp
let temp = no1;
no1 = no2;
no2 = temp;
console.log(`With Temp After swap: no1 = ${no1}, no2 = ${no2}, temp = ${temp}`);
