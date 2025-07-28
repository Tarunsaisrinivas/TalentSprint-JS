let driving = "walk";
if (driving == "bike") console.log("Wear a helmet");
else if (driving == "car") console.log("Put seatbelt");
else console.log("Be safe");

// 2 problem
let num = 10;
if (num % 2 == 0) console.log(`${num} is even`);
else console.log(`${num} is odd`);

// 3 problem
if (num % 2 != 0) console.log(`${num} is odd`);
else console.log(`${num} is even`);



// Method 1 for largest number
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







//  problem
let n = 10;
if (n > 0) console.log(`${n} is positive`);
else if (n < 0) console.log(`${n} is negative`);
else console.log(`${n} is zero`);

// unit digit compare code
let num1 = 123;
let num2 = 456;
let unitDigit1 = num1 % 10;
console.log(`Unit digit of ${num1} is ${unitDigit1}`);
let unitDigit2 = num2 % 10;
if (unitDigit1 == unitDigit2)
  console.log(`${unitDigit1} is equal  ${unitDigit2}`);
else console.log(`${unitDigit1} is not equal to ${unitDigit2}`);

//  Student Grade
let marks = 85;
if (marks >= 90) console.log("Grade A");
else if (marks >= 80) console.log("Grade B");
else if (marks >= 70) console.log("Grade C");
else if (marks >= 60) console.log("Grade D");
else if (marks >= 50) console.log("Grade E");
else console.log("Grade F");
