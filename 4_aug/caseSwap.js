// need to swap the case of the characters in the string
function caseSwap(str) {
  let swappedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swappedStr += str[i].toLowerCase();
    } else {
      swappedStr += str[i].toUpperCase();
    }
  }
  return swappedStr;
}

console.log(caseSwap("Hello World"));

// Method 2 :
function swapCase(str) {
  let result = "";
  for (let char of str) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
}

console.log("Swap Case : ", swapCase("Hello World"));

// one capital one small so on..
function alternateCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-zA-Z]/.test(char)) {
      result += i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}

console.log(alternateCase("Tarun"));

// function ganesh(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let str = [...new Set(arr[i])].join("");
//     return str;
//   }
// }
// console.log(ganesh(["Ganesh Reddy"]));

// function cprime(num){
//     let numbers = [];
//     while(!numbers.includes(num)){
//         let num = parseInt(num.slice(-1)+ num.slice(0, -1));
//         numbers.push(num);
//     }
//     return numbers;

// }

// console.log("Circular"  , cprime(132));

function circularNumbers(num) {
  let strNum = num.toString();
  let rotations = [];
  let current = strNum;

  while (!rotations.includes(parseInt(current))) {
    rotations.push(parseInt(current));
    current = current.slice(-1) + current.slice(0, -1);
  }

  return rotations;
}

console.log("Circular:", circularNumbers(132));

//Flatten Array
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example usage
const input = [1, [2, [3, 4], 5]];
console.log(flattenArray(input));

//Missing Number
function findMissing(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return total - sum;
}

// Example usage:
console.log(findMissing([1, 2, 4, 5]));

// Number to Words
function numberToWords(num) {
  const words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  return num
    .toString() // Convert number to string → "123"
    .split("") // Split into array → ["1", "2", "3"]
    .map((digit) => words[digit]) // Convert each digit to word
    .join(" "); // Join with spaces → "One Two Three"
}

// Example:
console.log(numberToWords(123)); // Output: "One Two Three"
console.log(numberToWords(705)); // Output: "Seven Zero Five"

// Count Character in String
function countCharacter(str, char) {
  return str.split(char).length - 1;
}

console.log(countCharacter("Tarun sai srinivas", "a"));

function reverseNumber(n) {
  return Number(n.toString().split("").reverse().join(""));
}
function isAdamNumber(n) {
  const originalSquare = n * n;
  const reversed = reverseNumber(n);
  const reversedSquare = reversed * reversed;
  const twiceRevSquare = reverseNumber(reversedSquare);
  return originalSquare === twiceRevSquare;
}

console.log(isAdamNumber(13));

//Method 2 :
function isAdam(num) {
  const rev = (x) => Number(x.toString().split("").reverse().join(""));
  return num * num === rev(rev(num) ** 2);
}
console.log(isAdam(13));