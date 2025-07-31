// count of words in the string
function countWords(str) {
  let words = str.split(" ");
  return words.length;
}

console.log(
  countWords(
    "Any fool can write code that a computer can understand Good programmers write code that human can understand"
  )
);

//fibanoci example :
function fibanoci(n) {
  if (n <= 1) {
    return n;
  }
  return fibanoci(n - 1) + fibanoci(n - 2);
}

console.log(fibanoci(10));

//collatz series with recurssive 9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1   

function collatz(num) {
  if (num === 1) {
    return 1;
  }
  if (num % 2 === 0) {
    return collatz(num / 2);
  } else {
    return collatz(3 * num + 1);
  }
}

console.log(collatz(19));

//collatz series with recurssive with steps, collatz sequence, max value with statement 

function collatzWithSteps(num, steps = 0) {
  if (num === 1) {
    return [1, steps];
  }
  if (num % 2 === 0) {
    return collatzWithSteps(num / 2, steps + 1);
  } else {
    return collatzWithSteps(3 * num + 1, steps + 1);
  }
}

console.log(collatzWithSteps(19));

//vowel count and consonent count seperate function

function vowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      count++;
    }
  }
  return count;
}

console.log(vowelCount("Hello World!"));

function consonentCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
      count++;
    }
  }
  return count;
}

console.log(consonentCount("Hello World!"));

//palindrome for string 
function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1));
}

// Test examples
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("a"));         // true
console.log(isPalindrome(""));          // true

//palindrome for numbers
function isNumberPalindrome(num) {
  const str = num.toString();

  function check(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return check(str.slice(1, -1));
  }

  return check(str);
}

console.log(isNumberPalindrome(121));     // true
console.log(isNumberPalindrome(12321));   // true
console.log(isNumberPalindrome(123));     // false
console.log(isNumberPalindrome(1));       // true
console.log(isNumberPalindrome(0));       // true
