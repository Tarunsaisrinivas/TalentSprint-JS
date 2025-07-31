//Sum with recurssion
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log("Sum : ", sum(10));

//sum of digits using recursion
function sumOfDigits(num) {
  if (num === 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log("Sum of digits : ", sumOfDigits(1234));
console.log("Sum of digits : ", sumOfDigits(0));
