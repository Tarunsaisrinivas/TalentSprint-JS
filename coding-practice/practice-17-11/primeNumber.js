function isPrime(num) {
  if (num <= 1 || num % 2 === 0) return false;
  if (num === 2) return true;
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(12));
// 5 steps