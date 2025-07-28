let a = 3;
let b = 4;
let c = 5;
if (a > b && a > c) console.log(`${a} is the largest number`);
else if (b > a && b > c) console.log(`${b} is the largest number`);
else console.log(`${c} is the largest number`);

// Method 2 for largest number
let numbers = [3, 4, 5];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) largest = numbers[i];
}
console.log(`${largest} is the largest number`);


let max = a;
if (b > max) max = b;
if (c > max) max = c;
console.log(`${max} is the largest number`);