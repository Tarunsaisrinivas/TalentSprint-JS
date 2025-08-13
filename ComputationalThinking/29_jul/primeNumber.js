//prime number
function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Is prime number", isPrimeNumber(3));
console.log("Is prime number", isPrimeNumber(28));


// prime or not in other way
function checkPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log ("Is prime number 2 model", checkPrime(3));

//need to skip ! need to be in single line code
function primeNumbersInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
console.log("Is prime number 2 model", primeNumbersInRange(1, 100));

function isPalindrome(num) {
  let str = num.toString();
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log("Is palindrome", isPalindrome(121));
console.log("Is palindrome", isPalindrome(123));

//Next smallest palindrom number
function nextPalindrome(num) {
  let nextNum = num + 1;
  while (!isPalindrome(nextNum)) {
    nextNum++;
  }
  return nextNum;
}
console.log("Next smallest palindrom number", nextPalindrome(121));
//30 th jul
//palindrome for a string
function isStringPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log("Is string palindrome", isStringPalindrome("racecar"));
console.log("Is string palindrome", isStringPalindrome("hello"));


