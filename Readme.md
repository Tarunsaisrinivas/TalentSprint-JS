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
| 23-07-2025 | Greatest of three            | [Greatest](#greatest)         |
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
### arthimetics

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
### swap
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
