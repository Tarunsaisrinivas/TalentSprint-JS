function numberReverse(num) {
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  return parseInt(reversedStr, 10);
}
console.log(numberReverse(12345));
console.log(numberReverse(21000));

// for string
function string(str) {
  return str.split("").reverse().join("");
}
console.log(string("Tarun"));
