function isPrime(num) {
  if (num <= 1 || num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
