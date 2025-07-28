// Name Funciton
// Ananymous Function
// Arrow Function
// description: Hoisting works only on named functions
// Function Declaration
function greet(name) {
  console.log("Hello", name);
}
greet("Tarun");
//anonymous function
const divisible = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "is FizzBuzz");
  }
  if (num % 3 === 0 && num % 5 !== 0) {
    console.log(num, "is Fizz");
  }
  if (num % 3 !== 0 && num % 5 === 0) {
    console.log(num, "is Buzz");
  }
};

divisible(15);

// sum of first 20 numbers
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(20));

// sum of even numbers in given range
function sumOfEvenNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvenNumbers(1, 10));

//Greatest of three numbers
function greatestOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log(greatestOfThree(3, 4, 5));

// find the no of 7 multiple in given range
function countMultiplesOfSeven(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % 7 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countMultiplesOfSeven(1, 100));

// 2 table
function tableOfTwo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}
tableOfTwo(10);

function factorial(start,end){
  let factorial = 1;
  for (let i = start; i <= end; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(1,5)); 