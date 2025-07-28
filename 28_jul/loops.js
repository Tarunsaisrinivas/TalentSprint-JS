//class topic
let n = 15693;
while (n > 0) {
  console.log(n % 10);
  n = Math.floor((n /= 10));
}

//for loop
//sum
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum =", sum);

//sqrt
let sqrt = 0;
for (let i = 0; i <= 100; i++) {
  sqrt = i * i;
  console.log("Square of", i, "is", sqrt);
}
//cbrt
let cbrt = 0;
for (let i = 0; i <= 100; i++) {
  cbrt = i * i * i;
  console.log("Cube Root of", i, "is", cbrt);
}

//factorial
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log("Factorial of 10 is", factorial);

//divisible by 3 and 5
let divisibleCount = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "is divisible by 3 and 5");
    divisibleCount++;
  }
}
console.log(
  "There are",
  divisibleCount,
  "numbers divisible by 3 and 5 between 1 and 100"
);

//while loop
//sum
console.log("Using while loop");
let sumWhile = 0;
let i = 1;
while (i <= 10) {
  sumWhile += i;
  i++;
}
console.log("Sum =", sum);

//sqrt
console.log("Square roots using while loop");
let j = 0;
while (j <= 100) {
  sqrt = j * j;
  console.log("using while Square of", j, "is", sqrt);
  j++;
}
//cbrt
console.log("Cube roots using while loop");
let k = 0;
while (k <= 100) {
  sqrt = k * k * k;
  console.log("using while Square of", k, "is", sqrt);
  k++;
}
//factorial
console.log("Factorial using while loop");
let factori̥alWhile = 1;
let l = 1;
while (l <= 10) {
  factorialWhile *= l;
  l++;
}
console.log("Factorial of 10 is", factorialWhile);
//divisible by 3 and 5
console.log("Divisible by 3 and 5 using while loop");
let m = 1;
while (m <= 100) {
  if (m % 3 === 0 && m % 5 === 0) {
    console.log(m, "is divisible by 3 and 5");
    divisibleCount++;
  }
  m++;
}
console.log(
  "There are",
  divisibleCount,
  "numbers divisible by 3 and 5 between 1 and 100"
);

//do while loop
console.log("Using do while loop");
let sumDoWhile = 0;
let num = 1;
do {
  sumDoWhile += num;
  num++;
} while (num <= 10);
console.log("Sum =", sumDoWhile);
//sqrt
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
//factorial
console.log("Factorial using do while loop");
let r = 1;
do {
  factorial *= r;
  r++;
} while (r <= 10);
console.log("Factorial of 10 is", factorial);
//divisible by 3 and 5
console.log("Divisible by 3 and 5 using do while loop");
let s = 1;
do {
  if (s % 3 === 0 && s % 5 === 0) {
    console.log(s, "is divisible by 3 and 5");
    divisibleCount++;
  }
  s++;
} while (s <= 100);
console.log(
  "There are",
  divisibleCount,
  "numbers divisible by 3 and 5 between 1 and 100"
);
