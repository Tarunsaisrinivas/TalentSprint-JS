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

//digital sum example 123 = 1+2+3 = 6 or 1234 = 1+2+3+4 = 10 then 1+0 = 1

function digitalSum(n) {
  while (n >= 10) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n;
}

console.log(digitalSum(123));   
console.log(digitalSum(1234));  
