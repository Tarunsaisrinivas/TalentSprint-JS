//basic recursive

function addNumber(n) {
  if (n === 1) return 1;
  return n + addNumber(n - 1);
}
console.log("The solution ", addNumber(5));

function factorial(num) {
  if (num == 0 || num == 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

