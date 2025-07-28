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

