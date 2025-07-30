# JavaScript

## 📅 Topics Table

| 📅 Date   |    🧠 Topic |🔗 Link                      | ✅ Status  |
| ---------- | ----------- | --------------------------- |-------------| 
| 22-07-2025 | Basics      | [Basics](#basics)           | ✅          |
|            | Arthimetics | [Arthimetics](#arthimetics) | ✅          |
|            | Speed       | [Speed](#speed)             | ✅          |
|            | Swap        | [Swap](#swap)               | ✅          |
|            | Temperature | [Temperature](#temperature) | ✅          |
| 23-07-2025 | Conditional | [Conditional](#conditional) | ✅          |
|            | Relational  | [relational](#relational)   | ✅          |
|            | Switch Case | [switch case](#switch)      | ✅          |
| 24-07-2025 | Strings     | [String](#string)           | ✅          |
| 28-07-2025 | Loops       | [Loops](#loops)             | ✅          |
|            | Functions   | [Functions](#functions)     | ✅          |
| 29-07-2025 | Factors     | [Factors](#factors)         | ✅          |
|            | Prime Number| [Prime Number](#prime)      | ✅          |

---


## 📘 Topics & Examples

### Basics

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

- Kilometers to Meter Per Second

```js
console.log("Speed Conversion :");
const KmHr = 90;
const Ms = KmHr * (1000 / 3600);
console.log(`${KmHr} km/h = ${Ms.toFixed(2)} m/s`);
```

- Meter Per Second to Kilometers

```js
const MsToKmHr = Ms * (3600 / 1000);
console.log(`${Ms} m/s = ${MsToKmHr} km/h`);
```

---

### Swap

- Method 1 :( Without Temp varaible ):

```js
let no1 = 10;
let no2 = 20;

console.log(`Before swap: no1 = ${no1}, no2 = ${no2}`);

no1 = no1 + no2;
no2 = no1 - no2;
no1 = no1 - no2;

console.log(`After swap: no1 = ${no1}, no2 = ${no2}`); // 20 10
```

- Method 2 : ( With Temp Variable ) :

```js
let temp = no1;
no1 = no2;
no2 = temp;
console.log(`With Temp After swap: no1 = ${no1}, no2 = ${no2}, temp = ${temp}`);
```

- Method 3 : ( With Destructuring ):

```js
[no2, no1] = [no1, no2];
console.log(`With Array Destructuring After swap: no1 = ${no1}, no2 = ${no2}`);
```

---

### Temperature

- celsius to Fahrenheit

```js
let c = 100;
let f = (c * 9) / 5 + 32;
console.log(`${c} celsius = ${f} Fahrenheit`);
```

- Fahrenheit to Celsius

```js
let f2 = 212;
let c2 = ((f2 - 32) * 5) / 9;
console.log(`${f2} Fahrenheit = ${c2} Celsius`);
```

- Fahrenheit to Kelvin

```js
let f3 = 212;
let k = ((f3 - 32) * 5) / 9 + 273.15;
console.log(`${f3} Fahrenheit = ${k} Kelvin`);
```

- Celsius to Kelvin

```js
let c3 = 100;
let k2 = c3 + 273.15;
console.log(`${c3} Celsius = ${k2} Kelvin`);
```

---

### Conditional

- Even or not

```js
let num = 10;
if (num % 2 == 0) console.log(`${num} is even`);
else console.log(`${num} is odd`);
```

- Positive or not

```js
let n = 10;
if (n > 0) console.log(`${n} is positive`);
else if (n < 0) console.log(`${n} is negative`);
else console.log(`${n} is zero`);
```

- Unit digit Compare

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

- Student Grade

```js
let marks = 85;
if (marks >= 90) console.log("Grade A");
else if (marks >= 80) console.log("Grade B");
else if (marks >= 70) console.log("Grade C");
else if (marks >= 60) console.log("Grade D");
else if (marks >= 50) console.log("Grade E");
else console.log("Grade F");
```

- Greatest of Three Digits
- Method 1: Using if-else

  ```js
  let a = 3;
  let b = 4;
  let c = 5;
  if (a > b && a > c) console.log(`${a} is the largest number`);
  else if (b > a && b > c) console.log(`${b} is the largest number`);
  else console.log(`${c} is the largest number`);
  ```

- **Method 2: Using a temporary max variable**
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

- Bitwise operator ( and(&) , or(|)):

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

- need to print the day of the week based on a number input

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

- leap year or not

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

- Number of days in month by Month Name

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

1.class toipc in js

```js
const strings = null;
console.log(!strings);
console.log(typeof strings);
let num = 10;
console.log(!num);
```

2.  Variable Assign

```js
let str = "Hello World!";
let str2 = "JavaScript";
let str3 = "Tarunsaisrinivas";
```

### Methods :
1. Length():

```js
console.log("Length:", str.length);
```

2. charAt():

```js
console.log("charAt(2):", str.charAt(2));
```

3. charCodeAt():

```js
console.log("charCodeAt(2):", str.charCodeAt(2));
```

4. indexOf():

```js
console.log("indexOf('World'):", str.indexOf("World"));
```

5. lastIndexOf():

```js
console.log("lastIndexOf('o'):", str.lastIndexOf("o"));
```

6. substring():

```js
console.log("substring(0, 5):", str.substring(0, 5));
```

7. slice() :

```js
console.log("slice(0, 5):", str.slice(0, 5));
```

8. split() :

```js
console.log("split(' '):", str.split(" "));
```

9. replace():

```js
console.log("replace('World', 'JavaScript'):",str.replace("World", "JavaScript"));
```
10. toUpperCase():
```js
console.log("toUpperCase():", str.toUpperCase());
```
11. toLowerCase():
```js
console.log("toLowerCase():", str.toLowerCase());
```
12. concat() :
```js
console.log("concat('JavaScript'):", str.concat("JavaScript"));
```
13. trim() :
```js
console.log("trim():", str.trim());
```
14. includes():
```js
console.log("includes('World'):", str.includes("World"));
```
15. startsWith() :
```js
console.log("startsWith('Hello'):", str.startsWith("Hello"));
```
16. endsWith():
```js
console.log("endsWith('!'):", str.endsWith("!"));
```
17. repeat() :
```js
console.log("repeat(2):", str.repeat(2)); 
```
18. padStart() :
```js
console.log("padStart(20, '-'):", str.padStart(20, "-")); 
```
19. padEnd():
```js
console.log("padEnd(20, '-'):", str.padEnd(20, "-"));
```
20. search():
```js
console.log("search('World'):", str.search("World"));
```
### Task : 
```js
console.log("Name :",str3.substring(0, 2).padEnd(str3.length-2, "*") + str3.slice(-2));
```
---
### Loops 

 - Class topic
```js
let n = 15693;
while (n > 0) {
  console.log(n % 10);
  n = Math.floor((n /= 10));
}
```
 ### For Loop
  - sum
```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum =", sum);
```
 - sqrt
```js
let sqrt = 0;
for (let i = 0; i <= 100; i++) {
  sqrt = i * i;
  console.log("Square of", i, "is", sqrt);
}
```
 - cbrt 
```js
let cbrt = 0;
for (let i = 0; i <= 100; i++) {
  cbrt = i * i * i;
  console.log("Cube Root of", i, "is", cbrt);
}
```

 - factorial
```js
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log("Factorial of 10 is", factorial);
```
 - divisible by 3 and 5
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
 - sum
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
 - sqrt
```js
console.log("Square roots using while loop");
let j = 0;
while (j <= 100) {
  sqrt = j * j;
  console.log("using while Square of", j, "is", sqrt);
  j++;
}
```
 - cbrt
```js
console.log("Cube roots using while loop");
let k = 0;
while (k <= 100) {
  sqrt = k * k * k;
  console.log("using while Square of", k, "is", sqrt);
  k++;
}
```
 - factorial
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
 - divisible by 3 and 5
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
 - sum
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
 - sqrt
```js
console.log("Square roots using do while loop");
let p = 0;
do {
  sqrt = p * p;
  console.log("using do while Square of", p, "is", sqrt);
  p++;
} while (p <= 100);
//cbrt
console.log("Cube roots using do while loop");
let q = 0;
do {
  sqrt = q * q * q;
  console.log("using do while Square of", q, "is", sqrt);
  q++;
} while (q <= 100);
```
 - factorial
 ```js
console.log("Factorial using do while loop");
let r = 1;
do {
  factorial *= r;
  r++;
} while (r <= 10);
console.log("Factorial of 10 is", factorial);
```

 - divisible by 3 and 5
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
 - Basic Function
```js
function greet(name) {
  console.log("Hello", name);
}
greet("Tarun");
```
 - Anonymous function
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

 - sum of first 20 numbers
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
 - sum of even numbers in given range
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
 - Greatest of four numbers
 ```js
function greatestOfThree(a, b, c,d) {
  return Math.max(a, b, c,d);
}
console.log(greatestOfThree(3, 4, 5,6));
```
 - find the no of 7 multiple in given range
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
 - 2 table
```js
function tableOfTwo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}
tableOfTwo(10);
```
- Factorial
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
 - FizzBuzz
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

 - count of factor
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
 - sum of factors
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
 - aliqoute sum
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

 - perfect number
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
 - abundant number
 ```js
function abundantNumber(num){
    if (aliquouteSum(num) > num) {
      return true;
    }
    return false;
}
console.log("Is abundant number", abundantNumber(12));
```
 - deficient number
```js
function deficientNumber(num){
    if (aliquouteSum(num) < num) {
      return true;
    }
    return false;
}
console.log("Is deficient number", deficientNumber(12));
```
 - perfect number in given range
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

 - prime number
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

 - prime or not in other way
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
 - need to skip ! need to be in single line code
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
 - Palindrome
 ```js
function isPalindrome(num) {
  let str = num.toString();
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log("Is palindrome", isPalindrome(121));
console.log("Is palindrome", isPalindrome(123));
```
 - Next smallest palindrom number
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