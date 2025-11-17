function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  return [...str1].sort().join("") === [...str2].sort().join("");
}
console.log(anagram("listen", "silent")); // true
// console.log(anagram("hello", "world")); // false

// 7 steps