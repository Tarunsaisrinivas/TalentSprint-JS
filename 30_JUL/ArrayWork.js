// greatest number of an array
function greatestNumber(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("Greatest number", greatestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Method 2 : Without function
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Greatest number", Math.max(...array));
//same code with function

// least number of an array
function leastNumber(arr) {
  if (arr.length === 0) return null;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log("Least number", leastNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Method 2 : Without function
console.log("Least number", Math.min(...array));

// sum of numbers in an array
function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Sum of numbers", sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Method 2 : Without function
console.log(
  "Sum of numbers",
  array.reduce((acc, curr) => acc + curr, 0)
);
// find the index of a specific element in an array
function findIndexOfElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
console.log(
  "Index of 6",
  findIndexOfElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)
);

// second greatest number in an array
function secondGreatestNumber(arr) {
  if (arr.length < 2) return null;
  let first = -Infinity,
    second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second === -Infinity ? null : second;
}
console.log(
  "Second greatest number",
  secondGreatestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

//method 2 : With function
function secondGreatestNumberWithSet(arr) {
  if (arr.length < 2) return null;
  return [...new Set(arr)].sort((a, b) => b - a)[1];
}
console.log("Second greatest number",secondGreatestNumberWithSet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Method 2 : Without function
let sortedArray = [...array].sort((a, b) => b - a);
console.log("Second greatest number", sortedArray[1]);



// sum of even numbers in an array
function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(
  "Sum of even numbers",
  sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// sum of odd numbers in an array
function sumOfOddNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(
  "Sum of odd numbers",
  sumOfOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// count of an element in an array
function countElement(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}
console.log("Count of 6", countElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));

// Method 2 : Without function
console.log("Count of 6", array.filter((num) => num === 6).length);

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(n.reduce((acc, curr) => (acc + curr), 100)); // Sum of numbers using reduce

