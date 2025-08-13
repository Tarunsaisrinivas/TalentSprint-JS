// number , string, boolean, null, undefined, object, array
// class toipc in js
const strings = null;
console.log(!strings);
console.log(typeof strings);
let num = 10;
console.log(!num);

//working with strings types
let str = "Hello World!";
let str2 = "JavaScript";
let str3 = "Tarunsaisrinivas";

// 1. length
console.log("Length:", str.length);

// 2. charAt()
console.log("charAt(2):", str.charAt(2));

// 3. charCodeAt()
console.log("charCodeAt(2):", str.charCodeAt(2));

// 4. indexOf()
console.log("indexOf('World'):", str.indexOf("World"));
// 5. lastIndexOf()
console.log("lastIndexOf('o'):", str.lastIndexOf("o")); // the last position index value of 'o'
// 6. substring()
console.log("substring(0, 5):", str.substring(0, 5)); //starts from index 0 to 5 (not includes 5 th value)
// 7. slice()
console.log("slice(0, 5):", str.slice(0, 5));
// 8. split()
console.log("split(' '):", str.split(" "));
// 9. replace()
console.log(
  "replace('World', 'JavaScript'):",
  str.replace("World", "JavaScript")
);
// 10. toUpperCase()
console.log("toUpperCase():", str.toUpperCase());
// 11. toLowerCase()
console.log("toLowerCase():", str.toLowerCase());
// 12. concat()
console.log("concat('JavaScript'):", str.concat("JavaScript"));
// 13. trim()
console.log("trim():", str.trim());
// 14. includes()
console.log("includes('World'):", str.includes("World"));
// 15. startsWith()
console.log("startsWith('Hello'):", str.startsWith("Hello"));
// 16. endsWith()
console.log("endsWith('!'):", str.endsWith("!"));
// 17. repeat()
console.log("repeat(2):", str.repeat(2)); // repeats the string 2 times
// 18. padStart()
console.log("padStart(20, '-'):", str.padStart(20, "-")); // adds '-' to the start of the string
console.log("padStart(20, '-'):", str.substring(0, 2).padStart(20, "*")); 
// 19. padEnd()ś
console.log("padEnd(20, '-'):", str.padEnd(20, "-")); // adds '-' to the end of the string
console.log("padEnd(20, '-'):", str.substring(0, 2).padEnd(20, "*"));
// 20. search()
console.log("search('World'):", str.search("World"));

console.log(
  "Name :",
  str3.substring(0, 2).padEnd(str3.length-2, "*") + str3.slice(-2)
);
console.log("length of str3:", str3.length);
