// reverse a string with recurssive
function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString("hello"));

//reverse of a number with recurssive

function reverseNumber(num, result = 0) {
  if (num === 0) {
    return result;
  }
  return reverseNumber(Math.floor(num / 10), result * 10 + (num % 10));
}

console.log(reverseNumber(123));

//reverse of a string with recurssive
function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString("hello"));

// have an array of in the fibanoci series 0 1 1 2 3 5 8 13 21 34 55 89 144

function fibanoci(num) {
  if (num <= 1) {
    return num;
  }
  return fibanoci(num - 1) + fibanoci(num - 2);
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

//colatzz series with recurssive with steps, collatz sequence, max value
console.log("KJFSJ")
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


//find the lucky number with recurssive
// ///

// fibanoci
// n th fibanoci
// collatz
// collatz with steps and sequence
// palindrome 
// odd palindrome 
// vowel count and consonent count seperate function
// count of words in the string

