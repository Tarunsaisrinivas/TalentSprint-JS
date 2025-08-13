//count of factor
function countFactors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
}
console.log("Count of factors", countFactors(10));

//sum of factors
function sumOfFactors(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log("Sum of factors", sumOfFactors(10));

//aliqoute sum
function aliquouteSum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log("Aliqoute sum", aliquouteSum(10));
console.log("Aliqoute sum", aliquouteSum(24));
console.log("Aliqoute sum", aliquouteSum(28));


//perfect number
function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log("Is perfect number", isPerfectNumber(6));
console.log("Is perfect number", isPerfectNumber(28));

//abundant number
function abundantNumber(num){
    if (aliquouteSum(num) > num) {
      return true;
    }
    return false;
}
console.log("Is abundant number", abundantNumber(12));

//deficient number
function deficientNumber(num){
    if (aliquouteSum(num) < num) {
      return true;
    }
    return false;
}
console.log("Is deficient number", deficientNumber(12));

//perfect number in given range
function perfectNumbersInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPerfectNumber(i)) {
      console.log(i, "is perfect number");
    }
  }
}
perfectNumbersInRange(1, 100);

//fact values of given range
// function factValues(start,end){
//   for (let i = start; i <= end; i++) {
//     console.log(factorial(1,i));
//   }
// }
// factValues(1,10);
