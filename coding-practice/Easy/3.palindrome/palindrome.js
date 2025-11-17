function palindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(palindrome("madam"));

function numberPalindrome(num) {
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(numberPalindrome(121));
