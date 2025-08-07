# JavaScript
Interview Questions 
## 📅 Topics Table

| 📅 Date   |    🧠 Topic |🔗 Link                     | ✅ Status  |
| ---------- | ----------- | --------------------------- |-------------|
| 22-07-2025 | Basics      | [Basics](#basics)          | ✅          |
|           | Arthimetics | [Arthimetics](#arthimetics) | ✅          |
|           | Speed       | [Speed](#speed)            | ✅          |
|           | Swap        | [Swap](#swap)              | ✅          |
|           | Temperature | [Temperature](#temperature) | ✅          |
| 23-07-2025 | Conditional | [Conditional](#conditional) | ✅          |
|           | Relational  | [Relational](#relational)   | ✅          |
|           | Switch Case | [switch case](#switch)      | ✅          |
| 24-07-2025 | Strings     | [String](#string)          | ✅          |
| 28-07-2025 | Loops       | [Loops](#loops)            | ✅          |
|           | Functions   | [Functions](#functions)     | ✅          |
| 29-07-2025 | Factors     | [Factors](#factors)         | ✅          |
|           | Prime Number| [Prime Number](#prime)      | ✅          |
| 30-07-2025 | Sum of Digit| [Sum of Digit](#sum_of_digit)| ✅          |
|           | Arrays      | [Arrays](#arrays)           | ✅          |
|           | Array_sums  | [Arrays Sum](#array_sums)   | ✅          |

---

## 📘 Topics & Examples

### Basics
1.  Simple arithmetic operations
```js
var a = 10,
  b = 40;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
```

---

### Arthimetics
2. Arithmetic operations with power
```js
let num1 = 25;
let num2 = 30;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
console.log(`${num1} ** 2 = ${num1 ** 2}`);
```

---

### Speed

3. Kilometers to Meter Per Second

```js
console.log("Speed Conversion :");
const KmHr = 90;
const Ms = KmHr * (1000 / 3600);
console.log(`${KmHr} km/h = ${Ms.toFixed(2)} m/s`);
```

4. Meter Per Second to Kilometers

```js
const MsToKmHr = Ms * (3600 / 1000);
console.log(`${Ms} m/s = ${MsToKmHr} km/h`);
```

---

### Swap

5. Swap without temp

```js
let no1 = 10;
let no2 = 20;

console.log(`Before swap: no1 = ${no1}, no2 = ${no2}`);

no1 = no1 + no2;
no2 = no1 - no2;
no1 = no1 - no2;

console.log(`After swap: no1 = ${no1}, no2 = ${no2}`); // 20 10
```
6. Swap with temp

```js
let temp = no1;
no1 = no2;
no2 = temp;
console.log(`With Temp After swap: no1 = ${no1}, no2 = ${no2}, temp = ${temp}`);
```

7. Swap with destructuring

```js
[no2, no1] = [no1, no2];
console.log(`With Array Destructuring After swap: no1 = ${no1}, no2 = ${no2}`);
```

---

### Temperature

8. celsius to Fahrenheit

```js
let c = 100;
let f = (c * 9) / 5 + 32;
console.log(`${c} celsius = ${f} Fahrenheit`);
```

9. Fahrenheit to Celsius

```js
let f2 = 212;
let c2 = ((f2 - 32) * 5) / 9;
console.log(`${f2} Fahrenheit = ${c2} Celsius`);
```

10. Fahrenheit to Kelvin

```js
let f3 = 212;
let k = ((f3 - 32) * 5) / 9 + 273.15;
console.log(`${f3} Fahrenheit = ${k} Kelvin`);
```

11. Celsius to Kelvin

```js
let c3 = 100;
let k2 = c3 + 273.15;
console.log(`${c3} Celsius = ${k2} Kelvin`);
```

---

### Conditional

12. Even or not

```js
let num = 10;
if (num % 2 == 0) console.log(`${num} is even`);
else console.log(`${num} is odd`);
```

13. Positive or not

```js
let n = 10;
if (n > 0) console.log(`${n} is positive`);
else if (n < 0) console.log(`${n} is negative`);
else console.log(`${n} is zero`);
```

14. Unit digit Compare

```js
let num1 = 123;
let num2 = 456;
let unitDigit1 = num1 % 10;
console.log(`Unit digit of ${num1} is ${unitDigit1}`);
let unitDigit2 = num2 % 10;
if (unitDigit1 == unitDigit2)
  console.log(`${unitDigit1} is equal  ${unitDigit2}`);
else console.log(`${unitDigit1} is not equal to ${unitDigit2}`);
```

15. Student Grade

```js
let marks = 85;
if (marks >= 90) console.log("Grade A");
else if (marks >= 80) console.log("Grade B");
else if (marks >= 70) console.log("Grade C");
else if (marks >= 60) console.log("Grade D");
else if (marks >= 50) console.log("Grade E");
else console.log("Grade F");
```

16. Greatest of Three Digits
- Method 1: Using if-else

  ```js
  let a = 3;
  let b = 4;
  let c = 5;
  if (a > b && a > c) console.log(`${a} is the largest number`);
  else if (b > a && b > c) console.log(`${b} is the largest number`);
  else console.log(`${c} is the largest number`);
  ```

17. **Method 2: Using a temporary max variable**

  ```js
  let a = 3;
  let b = 4;
  let c = 5;
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  console.log(`${max} is the largest number`);
  ```

---

### Relational

- < , > , <= , >= , == , !=, ===, !==
18. Comparison operators
```js
let num1 = 14;
let num2 = 19;
let result = num1 < num2;
console.log(`${num1} < ${num2} = ${result} typeof: ${typeof result}`, result);
result = num1 > num2;
console.log(`${num1} > ${num2} = ${result} typeof: ${typeof result}`, result);
result = num1 <= num2;
console.log(`${num1} <= ${num2} = ${result} typeof: ${typeof result}`, result);
result = num1 >= num2;
console.log(`${num1} >= ${num2} = ${result} typeof: ${typeof result}`, result);
result = num1 == num2;
console.log(`${num1} == ${num2} = ${result} typeof: ${typeof result}`, result);
result = num1 != num2;
console.log(`${num1} != ${num2} = ${result} typeof: ${typeof result}`, result);
result = num1 === num2;
console.log(`${num1} === ${num2} = ${result} typeof: ${typeof result}`, result);
result = num1 !== num2;
console.log(`${num1} !== ${num2} = ${result} typeof: ${typeof result}`, result);
```

19. Bitwise operator ( and(&) , or(|)):

```js
result = 3 & 4;
console.log(`3 & 4 = ${result} typeof: ${typeof result}`, result);
result = 3 | 4;
console.log(`3 | 4 = ${result} typeof: ${typeof result}`, result);
result = 3 & 7;
console.log(`3 & 7 = ${result} typeof: ${typeof result}`, result);
result = 7 | 8;
console.log(`7 || 8 = ${result} typeof: ${typeof result}`, result);
```

- practice :

```js
let num = 5;
console.log(num && num > 0);
console.log("3 > 4 && 4 > 8", 3 > 4 && 4 > 8);
console.log("!(4 > 8)", !(4 > 8));
console.log("!(4 < 8)", !(4 < 8));
console.log("!(-8 > 8)", !(-8 > 8));
console.log("!(-8 > 8)", !(-8 > 8));
console.log("!(-8 || 8)", !(-8 || 8));
```

---

### Switch

20. need to print the day of the week based on a number input

```js
let dayNumber = 5;

switch (dayNumber % 7) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("invalid day number");
}
```

21. leap year or not

```js
let leapyear = 1600;
switch (true) {
  case leapyear % 400 === 0:
    console.log("leap year");
    break;
  case leapyear % 100 === 0:
    console.log("not a leap year");
    break;
  case leapyear % 4 === 0:
    console.log("leap year");
    break;
  default:
    console.log("not a leap year");
    break;
}
```

22. Number of days in month by Month Name

```js
let monthName = "May";
monthName =
  monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
let year = 2024;

switch (monthName) {
  case "January":
    console.log(`${monthName} has 31 days`);
    break;
  case "February":
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      console.log(`${monthName} has 29 days (leap year)`);
    } else {
      console.log(`${monthName} has 28 days (not a leap year)`);
    }
    break;
  case "March":
    console.log(`${monthName} has 31 days`);
    break;
  case "April":
    console.log(`${monthName} has 30 days`);
    break;
  case "May":
    console.log(`${monthName} has 31 days`);
    break;
  case "June":
    console.log(`${monthName} has 30 days`);
    break;
  case "July":
    console.log(`${monthName} has 31 days`);
    break;
  case "August":
    console.log(`${monthName} has 31 days`);
    break;
  case "September":
    console.log(`${monthName} has 30 days`);
    break;
  case "October":
    console.log(`${monthName} has 31 days`);
    break;
  case "November":
    console.log(`${monthName} has 30 days`);
    break;
  case "December":
    console.log(`${monthName} has 31 days`);
    break;
  default:
    console.log("Invalid month name");
}
```

---

### String

23. class toipc in js

```js
const strings = null;
console.log(!strings);
console.log(typeof strings);
let num = 10;
console.log(!num);
```

24. Variable Assign

```js
let str = "Hello World!";
let str2 = "JavaScript";
let str3 = "Tarunsaisrinivas";
```

### Methods

25. Length():

```js
console.log("Length:", str.length);
```

26. charAt():

```js
console.log("charAt(2):", str.charAt(2));
```

27. charCodeAt():

```js
console.log("charCodeAt(2):", str.charCodeAt(2));
```

28. indexOf():

```js
console.log("indexOf('World'):", str.indexOf("World"));
```

29. lastIndexOf():

```js
console.log("lastIndexOf('o'):", str.lastIndexOf("o"));
```

30. substring():

```js
console.log("substring(0, 5):", str.substring(0, 5));
```

31. slice() :

```js
console.log("slice(0, 5):", str.slice(0, 5));
```

32. split() :

```js
console.log("split(' '):", str.split(" "));
```

33. replace():

```js
console.log("replace('World', 'JavaScript'):",str.replace("World", "JavaScript"));
```

34. toUpperCase():

```js
console.log("toUpperCase():", str.toUpperCase());
```

35. toLowerCase():

```js
console.log("toLowerCase():", str.toLowerCase());
```

36. concat() :

```js
console.log("concat('JavaScript'):", str.concat("JavaScript"));
```

37. trim() :

```js
console.log("trim():", str.trim());
```

38. includes():

```js
console.log("includes('World'):", str.includes("World"));
```

39. startsWith() :

```js
console.log("startsWith('Hello'):", str.startsWith("Hello"));
```

40. endsWith():

```js
console.log("endsWith('!'):", str.endsWith("!"));
```

41. repeat() :

```js
console.log("repeat(2):", str.repeat(2)); 
```

42. padStart() :

```js
console.log("padStart(20, '-'):", str.padStart(20, "-")); 
```

43. padEnd():

```js
console.log("padEnd(20, '-'):", str.padEnd(20, "-"));
```

44. search():

```js
console.log("search('World'):", str.search("World"));
```

### Task
45. Mask name using pad and slice
```js
console.log("Name :",str3.substring(0, 2).padEnd(str3.length-2, "*") + str3.slice(-2));
```

---

### Loops

46. Class topic

```js
let n = 15693;
while (n > 0) {
  console.log(n % 10);
  n = Math.floor((n /= 10));
}
```

### For Loop

47. sum

```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum =", sum);
```

48. sqrt

```js
let sqrt = 0;
for (let i = 0; i <= 100; i++) {
  sqrt = i * i;
  console.log("Square of", i, "is", sqrt);
}
```

49. cbrt

```js
let cbrt = 0;
for (let i = 0; i <= 100; i++) {
  cbrt = i * i * i;
  console.log("Cube Root of", i, "is", cbrt);
}
```

50. factorial

```js
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log("Factorial of 10 is", factorial);
```

51. divisible by 3 and 5

```js
let divisibleCount = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "is divisible by 3 and 5");
    divisibleCount++;
  }
}
console.log("There are",divisibleCount,"numbers divisible by 3 and 5 between 1 and 100"
);
```

### While Loop

52. sum

```js
console.log("Using while loop");
let sumWhile = 0;
let i = 1;
while (i <= 10) {
  sumWhile += i;
  i++;
}
console.log("Sum =", sum);
```

53. sqrt

```js
console.log("Square roots using while loop");
let j = 0;
while (j <= 100) {
  sqrt = j * j;
  console.log("using while Square of", j, "is", sqrt);
  j++;
}
```

54. cbrt

```js
console.log("Cube roots using while loop");
let k = 0;
while (k <= 100) {
  sqrt = k * k * k;
  console.log("using while Square of", k, "is", sqrt);
  k++;
}
```
55. factorial

```js
console.log("Factorial using while loop");
let factorialWhile = 1;
let l = 1;
while (l <= 10) {
  factorialWhile *= l;
  l++;
}
console.log("Factorial of 10 is", factorialWhile);
```

56. divisible by 3 and 5

```js
console.log("Divisible by 3 and 5 using while loop");
let m = 1;
while (m <= 100) {
  if (m % 3 === 0 && m % 5 === 0) {
    console.log(m, "is divisible by 3 and 5");
    divisibleCount++;
  }
  m++;
}
console.log("There are",divisibleCount,"numbers divisible by 3 and 5 between 1 and 100");
```

### do while loop

57. sum

```js
console.log("Using do while loop");
let sumDoWhile = 0;
let num = 1;
do {
  sumDoWhile += num;
  num++;
} while (num <= 10);
console.log("Sum =", sumDoWhile);
```

58. sqrt

```js
console.log("Square roots using do while loop");
let p = 0;
do {
  sqrt = p * p;
  console.log("using do while Square of", p, "is", sqrt);
  p++;
} while (p <= 100);
```
59. cbrt
```js
console.log("Cube roots using do while loop");
let q = 0;
do {
  sqrt = q * q * q;
  console.log("using do while Square of", q, "is", sqrt);
  q++;
} while (q <= 100);
```

60. factorial

 ```js
console.log("Factorial using do while loop");
let r = 1;
do {
  factorial *= r;
  r++;
} while (r <= 10);
console.log("Factorial of 10 is", factorial);
```

61. divisible by 3 and 5

```js
console.log("Divisible by 3 and 5 using do while loop");
let s = 1;
do {
  if (s % 3 === 0 && s % 5 === 0) {
    console.log(s, "is divisible by 3 and 5");
    divisibleCount++;
  }
  s++;
} while (s <= 100);
console.log("There are",divisibleCount,"numbers divisible by 3 and 5 between 1 and 100");
```

---

### Functions

62. Basic Function

```js
function greet(name) {
  console.log("Hello", name);
}
greet("Tarun");
```

63. Anonymous function

 ```js
const divisible = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "is FizzBuzz");
  }
  if (num % 3 === 0 && num % 5 !== 0) {
    console.log(num, "is Fizz");
  }
  if (num % 3 !== 0 && num % 5 === 0) {
    console.log(num, "is Buzz");
  }
};

divisible(15);
```

64. sum of first 20 numbers

```js
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(20));
```

65. sum of even numbers in given range

 ```js
function sumOfEvenNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvenNumbers(1, 10));
```

66. Greatest of four numbers

 ```js
function greatestOfThree(a, b, c,d) {
  return Math.max(a, b, c,d);
}
console.log(greatestOfThree(3, 4, 5,6));
```

67. find the no of 7 multiple in given range

 ```js
function countMultiplesOfSeven(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % 7 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countMultiplesOfSeven(1, 100));
```

68. 2 table

```js
function tableOfTwo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}
tableOfTwo(10);
```

69. Factorial

```js
function factorial(start,end){
  let factorial = 1;
  for (let i = start; i <= end; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(1,5)); 
```

70. FizzBuzz

```js
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

```

### Factors

71. count of factor

```js
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
```

72. sum of factors

```js
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
```

73. aliqoute sum 

 ```js
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
```

74. perfect number

 ```js
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
```

75. abundant number

 ```js
function abundantNumber(num){
    if (aliquouteSum(num) > num) {
      return true;
    }
    return false;
}
console.log("Is abundant number", abundantNumber(12));
```

76. deficient number

```js
function deficientNumber(num){
    if (aliquouteSum(num) < num) {
      return true;
    }
    return false;
}
console.log("Is deficient number", deficientNumber(12));
```

77. perfect number in given range

 ```js
function perfectNumbersInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPerfectNumber(i)) {
      console.log(i, "is perfect number");
    }
  }
}
perfectNumbersInRange(1, 100);
```

---

### Prime

78. prime number

```js
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
```

79. prime or not in other way

```js
function checkPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log ("Is prime number 2 model", checkPrime(3));
```

80. Prime numbers in range

 ```js
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
```

81. Palindrome

 ```js
function isPalindrome(num) {
  let str = num.toString();
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log("Is palindrome", isPalindrome(121));
console.log("Is palindrome", isPalindrome(123));
```

82. Next smallest palindrom number

 ```js
function nextPalindrome(num) {
  let nextNum = num + 1;
  while (!isPalindrome(nextNum)) {
    nextNum++;
  }
  return nextNum;
}
console.log("Next smallest palindrom number", nextPalindrome(121));
```

83. palindrome for a string

 ```js
function isStringPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log("Is string palindrome", isStringPalindrome("racecar"));
console.log("Is string palindrome", isStringPalindrome("hello"));
```

---

### sum_of_digit
84. Sum of digits in a number
```js
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("Sum of digits", sumOfDigits(1234));
```
85. Count of digits in a number
```js
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log("Count of digits", countDigits(1234));
```
86. Sum of squares of each digit in a number
```js
function sumOfSquaresOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit; // this can be also be as Math.pow(digit, 2), sum+= digit **2
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("Sum of squares of digits", sumOfSquaresOfDigits(1234));
```
87. Amstrong number
```js
function ArmstrongNumber(num) {
  let sum = 0;

  const digitsCount = countDigits(num);

  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digitsCount);
    num = Math.floor(num / 10);
  }
  return sum;
}
function isArmstrongNumber(num) {
  return ArmstrongNumber(num) === num;
}
console.log("Is Armstrong number", isArmstrongNumber(153));
```
88. reverse a number another method
```js
function revNumber(num) {
  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log("Reverse a number", revNumber(1234)); // Output: 4321
```
---
### Arrays
 - Array Methods:
## 📚 JavaScript Array Methods Table

| 🔢 Method       | 📝 Description                                            | 🔁 Mutable / Immutable |
|------------------|-----------------------------------------------------------|------------------------|
| `push()`         |Adds one or more elements to the end of an array            | ✅ Mutable            |
| `pop()`          | Removes the last element from an array                     | ✅ Mutable            |
| `shift()`        | Removes the first element from an array                    | ✅ Mutable            |
| `unshift()`      | Adds one or more elements to the beginning of an array      | ✅ Mutable            |
| `splice()`       | Adds/removes elements at a specified index                 | ✅ Mutable            |
| `sort()`         | Sorts the elements of an array in place                    | ✅ Mutable            |
| `reverse()`      | Reverses the elements of an array in place                 | ✅ Mutable            |
| `fill()`         | Fills elements in an array with a static value             | ✅ Mutable            |
| `copyWithin()` | Copies part of the array to another location in the same array| ✅ Mutable            |
| `concat()`       | Merges two or more arrays and returns a new array          | ❌ Immutable          |
| `slice()`        | Returns a shallow copy of a portion of an array            | ❌ Immutable          |
| `map()`|Creates a new array with the results of calling a function on each element | ❌ Immutable       |
| `filter()`    | Creates a new array with elements that pass the test condition | ❌ Immutable          |
| `reduce()`    | Reduces array to a single value using a callback function      | ❌ Immutable          |
| `reduceRight()`  | Same as reduce but starts from the end          | ❌ Immutable          |
| `find()`         | Returns the first element that satisfies the test function  | ❌ Immutable          |
| `findIndex()`    | Returns the index of the first element that satisfies the condition| ❌ Immutable          |
| `indexOf()`      | Returns the first index of a specified value               | ❌ Immutable          |
| `lastIndexOf()`  | Returns the last index of a specified value                | ❌ Immutable          |
| `includes()`     | Determines whether an array includes a certain value      | ❌ Immutable          |
| `every()`        | Checks if all elements pass a test                        | ❌ Immutable          |
| `some()`         | Checks if at least one element passes a test              | ❌ Immutable          |
| `join()`         | Joins all array elements into a string                    | ❌ Immutable          |
| `toString()`     | Converts the array to a string                             | ❌ Immutable          |
| `flat()`         | Flattens nested arrays into a single array               | ❌ Immutable          |
| `flatMap()`      | Maps and flattens array in one go                         | ❌ Immutable          |
| `at()`          | Returns element at given index (supports negative indexing)| ❌ Immutable          |

89. Push
```js
let arr = [1, 2, 3];
console.log(arr.push(4, 5));
console.log("after push", arr);
console.log(arr.push(6, 7, 8));
console.log("after push", arr);
console.log(arr.push(9, 10, 11));
console.log("after push", arr);
```
90. Pop
```js
console.log(arr.pop());
console.log("after pop", arr);
```
91. Shift
```js
console.log(arr.shift());
console.log("after shift", arr);
```
92. Slice
```js
let slicedArr = arr.slice(2, 5);
console.log("after slice", arr);
```
93. Sort
```js
let unsortedArr = [5, 3, 8, 1, 2];
unsortedArr.sort((a, b) => a - b);
console.log(unsortedArr);
```
94. Concat
```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatenatedArr = arr1.concat(arr2);
console.log(concatenatedArr);
```
95. Join
```js
let joinedArr = arr.join("-");
console.log(joinedArr); // Output: "1-2-a-b-c-6-7-8-9-10"
```
96. for in 
```js
for( let val in arr) {
  console.log(val); 
}
```
97. for of 
```js
for( let val of arr) {
  console.log(val);
}
```
98. for each
```js
arr.forEach((element, index) => {
  console.log(element, index); 
});
```
99. Index
```js
console.log(arr.indexOf(2));
```
### Array_sums

100. greatest number of an array
```js
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
console.log("Greatest number", greatestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9,10]));
```
101. least number of an array
```js
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

```
102. sum of numbers in an array
```js
function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Sum of numbers", sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

```
103. WAP to find the index of specific element in an array
```js
function findIndexOfElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
console.log("Index of 6", findIndexOfElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
```
104. second greatest number in an array
```js
function secondGreatestNumber(arr) {
  if (arr.length < 2) return null; 
  let first = -Infinity, second = -Infinity;
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
console.log("Second greatest number", secondGreatestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

```
105. sum of even numbers in an array
```js
function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log("Sum of even numbers", sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```
106. sum of odd numbers in an array
```js
function sumOfOddNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log("Sum of odd numbers", sumOfOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

```
107. count of an elements in array
```js
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
```