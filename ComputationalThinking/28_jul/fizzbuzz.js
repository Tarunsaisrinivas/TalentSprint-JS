//fizbuzz in a range of 0 to 100 and if not need to print the number

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

// function fizzBuzzInRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i, "is FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log(i, "is Fizz");
//     } else if (i % 5 === 0) {
//       console.log(i, "is Buzz");
//     }
//   }
// }
// fizzBuzzInRange(0, 100);
