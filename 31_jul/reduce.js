const fruits = ["apple", "banana", "orange", "kiwi", "grape", "fig", "mango"];
console.log(fruits.reduce((acc, curr) => acc + ", " + curr));
console.log(
  "fruits reduce :",
  fruits.reduce((acc, curr) => acc + curr));

console.log(
  "fruits reduce right :",
  fruits.reduceRight((acc, curr) => acc + ", " + curr)
);
console.log("greater than 5",fruits.filter((fruits) => fruits.length >5));
// filter
console.log(
  fruits
    .filter((fruit) => fruit.length > 5)
    .reduce((prev, curr) => prev  + curr)
);
console.log(
  fruits
    .filter((fruit) => fruit.length > 5)
    .reduceRight((prev, curr) => prev + ", " + curr)
);

//odd sum of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  numbers.filter((num) => num % 2 !== 0).reduce((prev, curr) => prev + curr)
);
