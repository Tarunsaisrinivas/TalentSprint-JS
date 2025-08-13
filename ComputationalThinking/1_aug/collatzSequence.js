

function Anagram(str1, str2) {
  //   str1 = str1.replace(/\W\s/g, "").toLowerCase();
  //   str2 = str2.replace(/\W\s/g, "").toLowerCase();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false;

  return [...str1].sort().join("") === [...str2].sort().join("");
}
console.log("Anagram ",Anagram("Dormitory", "Dirty room"));

// Circular Prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getRotations(num) {
  let str = num.toString();
  let rotations = [];
  for (let i = 0; i < str.length; i++) {
    let rotated = str.slice(i) + str.slice(0, i);
    rotations.push(Number(rotated));
  }
  return rotations;
}

function isCircularPrime(n) {
  let rotations = getRotations(n);
  console.log("Rotations:", rotations);
  for (let i = 0; i < rotations.length; i++) {
    if (!isPrime(rotations[i])) {
      return false;
    }
  }
  return true;
}

console.log("Is Circular Prime?", isCircularPrime(121));


// words should be reverse in the string

function reverseWords(sentence) {
  return sentence
    .split(" ")              // Split by spaces: ["Hello", "World"]
    .map(word => word.split("").reverse().join("")) // Reverse each word
    .join(" ");              // Join them back with space
}


console.log(reverseWords("Hello World"));  // olleH dlroW

//Amicable pair

function sumOfDivisors(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function isAmicable(a, b) {
  return sumOfDivisors(a) === b && sumOfDivisors(b) === a;
}


console.log(isAmicable(220, 284) ? "Amicable Pair" : "Not Amicable");
console.log(isAmicable(220, 284) );


// class Method Circular Number
function circularNum(num){
  let numbers = [];
  let str = num.toString();
  let current = str;
    do{
  let num = parseInt(current.slice(-1) + current.slice(0, -1));
  numbers.push(current);
  }
  while(!numbers.includes(num))
  return numbers;
}
