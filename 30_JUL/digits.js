//SUM OF DIGITS IN A NUMBER
//DIGIT COUNT IN A NUMBER
//SUM OF SQUARES OF EACH DIGIT IN A NUMBER
//AMSTRONG NUMBER

// 1. Sum of digits in a number
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("Sum of digits", sumOfDigits(1234));
// 2. Count of digits in a number
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log("Count of digits", countDigits(1234));

// 3. Sum of squares of each digit in a number
function sumOfSquaresOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit; // this can be also be as Math.pow(digit, 2), sum+= digit **2
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("Sum of squares of digits", sumOfSquaresOfDigits(1234));
//4 Amstrong number
function ArmstrongNumber(num) {
  let sum = 0;

  const digitsCount = countDigits(num);

  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digitsCount);
    num = Math.floor(num / 10);
  }
  return sum;
}
function isArmstrongNumber(num) {
  return ArmstrongNumber(num) === num;
}
console.log("Is Armstrong number", isArmstrongNumber(153));

//reverse a number another method
function revNumber(num) {
  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log("Reverse a number", revNumber(1234)); // Output: 4321
