function primeNumber(num) {
  if (num <= 1) return false;
  if (num == 2) return false;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
function isPrime(start, end) {
  for (let i = start; i <= end; i++) {
    if (primeNumber(i)) console.log(i);
  }
}
isPrime(1, 100);

//lucky number
function isLucky(n, counter = 2) {
  if (counter > n) return true;
  if (n % counter === 0) return false;
  return isLucky(n - Math.floor(n / counter), counter + 1);
}

console.log(isLucky(19)); // true ✅
console.log(isLucky(20)); // false ❌
console.log(isLucky(7));  // true ✅
