# JavaScript 


## 📅 Topics Table

| Date       | Topic                        | Link                          |
|------------|------------------------------|-------------------------------|
| 22-07-2025 | Basics                       | [Basics](#basics)             |
| 22-07-2025 | Arthimetics                  | [Arthimetics](#arthimetics)   |
| 22-07-2025 | Speed                        | [Speed](#speed)               |
| 22-07-2025 | Swap                         | [Swap](#swap)                 |
| 22-07-2025 | Temperature                  | [Temperature](#temperature)   |
| 23-07-2025 | Conditional                  | [Conditional](#conditional)   |
| 23-07-2025 | Relational                   | [relational](#relational)     | 
| 23-07-2025 | Switch Case                  | [switch case](#switchCase)    |
| 24-07-2025 | String                       | [String](#string)             |

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
[no2,no1] = [no1,no2];
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
 -  Fahrenheit to Celsius
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
-  Greatest of Three Digits
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
