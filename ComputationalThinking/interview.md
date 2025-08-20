# 📘 JavaScript Interview Questions & Answers

A collection of commonly asked JavaScript interview questions with clear answers and practical code examples.

---

## 📌 1. What is JavaScript and how is it used?

JavaScript is a **popular scripting language** primarily used to create **interactive effects** within web browsers.  
It allows developers to implement complex features such as:
- Content updates
- Interactive maps
- Animated graphics
- Dynamic form validations

---

## 📌 2. What are the data types in JavaScript?

JavaScript has several built-in data types:

- **String**
- **Number**
- **Boolean**
- **Null**
- **Undefined**
- **Object**
- **Symbol** (introduced in ES6)

---

## 📌 3. What is Hoisting in JavaScript?

**Hoisting** is a JavaScript mechanism where **variable and function declarations** are moved to the **top of their scope** before code execution.

This allows you to use variables and functions before they are declared.

---

## 📌 4. What are first-class functions?

In JavaScript, **functions are treated as first-class objects**, meaning:

- They can be stored in variables
- Passed as arguments to other functions
- Returned from functions

---

## 📌 5. Difference between `var`, `let`, and `const`

| Keyword | Scope        | Reassignment | Redeclaration | Hoisting |
|---------|--------------|--------------|---------------|----------|
| `var`   | Function/global | ✅ Allowed  | ✅ Allowed     | ✅ Yes (undefined) |
| `let`   | Block         | ✅ Allowed   | ❌ Not allowed | ✅ Yes (temporal dead zone) |
| `const` | Block         | ❌ Not allowed | ❌ Not allowed | ✅ Yes (temporal dead zone) |

---

## 📌 6. Difference between `==` and `===`

- `==` – Loose equality: performs **type conversion** before comparing.
- `===` – Strict equality: compares **both value and type**, no type conversion.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

---

## 📌 7. How to check the type of a variable?

Use the `typeof` operator.

```javascript
let name = "Alice";
console.log(typeof name); // "string"
```

---

## 📌 8. What is the DOM?

**DOM (Document Object Model)** is a **programming interface** for HTML and XML documents.  
It represents the structure of a webpage, allowing JavaScript to **manipulate** elements, attributes, and styles dynamically.

---

## 📌 9. How to concatenate two strings?

```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // "Hello World"
```

---

## 📌 10. What is a Closure?

A **closure** is a function that **remembers variables** from its outer scope even after the outer function has finished executing.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
```

---

## 📌 11. What does `isNaN()` do?

The `isNaN()` function checks whether a value **is not a number**.

```javascript
console.log(isNaN("hello")); // true
console.log(isNaN(123));     // false
```

---

## 📌 12. How to add JavaScript to an HTML file?

**Inline Script:**

```html
<script>
  console.log("Hello from JS");
</script>
```

**External File:**

```html
<script src="app.js"></script>
```

---

## 🧪 Coding Challenge: Reverse a String

**Question:** Write a function to reverse a string in JavaScript.

```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
```

---

## ✅ Summary

This guide covers:

- Core JavaScript concepts
- Coding syntax and examples
- Practical interview preparation

> 🧠 *Tip: Practice these concepts regularly to build confidence for technical interviews.*---

## 📌 13. What is the difference between `null` and `undefined`?

- `null` is an assignment value that represents no value.
- `undefined` means a variable has been declared but not assigned a value yet.

```javascript
let a = null;
let b;
console.log(a); // null
console.log(b); // undefined
```

---

## 📌 14. What is an IIFE (Immediately Invoked Function Expression)?

An IIFE is a function that runs as soon as it is defined.

```javascript
(function() {
  console.log("IIFE executed!");
})();
```

---

## 📌 15. What is event bubbling and capturing?

- **Event Bubbling:** Events propagate from the innermost element to the outer.
- **Event Capturing:** Events propagate from the outermost element to the target.

```javascript
element.addEventListener('click', handler, true); // Capturing
element.addEventListener('click', handler, false); // Bubbling
```

---

## 📌 16. What is a promise in JavaScript?

A **promise** represents the eventual completion (or failure) of an asynchronous operation.

```javascript
let promise = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise.then(response => console.log(response));
```

---

## 📌 17. What is async/await?

`async/await` is a syntax for writing asynchronous code in a cleaner way using promises.

```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com');
  let data = await response.json();
  console.log(data);
}
```

---

## 📌 18. What is the spread operator?

The spread operator (`...`) allows an iterable to expand in places where zero or more arguments or elements are expected.

```javascript
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]
```

---

## 📌 19. What are template literals?

Template literals allow embedded expressions and multi-line strings using backticks (`` ` ``).

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"
```

---

## 📌 20. What are arrow functions?

Arrow functions provide a concise syntax to write functions and do not have their own `this`.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

---

## 📌 21. How to remove duplicates from an array?

```javascript
let numbers = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4]
```

---

## 📌 22. What are JavaScript array methods?

- `map()`, `filter()`, `reduce()`, `forEach()`, `find()`, `some()`, `every()`, `includes()`

Example: Map

```javascript
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```
Example : Filter
```js
let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```
Example : reduce
```js
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```
Example: forEach()
```js
let nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2)); 
// 2, 4, 6 (prints each)
```
Example: find()
```js
let nums = [1, 2, 3, 4];
let found = nums.find(n => n > 2);
console.log(found); // 3
```
Example: some()
```js
let nums = [1, 2, 3];
let hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true

```
Example: every()
```js
let nums = [2, 4, 6];
let allEven = nums.every(n => n % 2 === 0);
console.log(allEven); // true
```
Example: includes()
```js
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('mango'));  // false
```
- Summary Table
---
| Method       | Returns             | Use Case                         |
| ------------ | ------------------- | -------------------------------- |
| `map()`      | New array           | Transform each item              |
| `filter()`   | New array           | Filter items                     |
| `reduce()`   | Single value        | Sum, multiply, or combine values |
| `forEach()`  | Nothing             | Loop through items (no return)   |
| `find()`     | First matching item | Find one element                 |
| `some()`     | Boolean             | At least one match               |
| `every()`    | Boolean             | All match                        |
| `includes()` | Boolean             | Check existence                  |

---
## 📌 23. What is Prototype ? 
```js
function person1(name, age) {
    this.name = name;
    this.age = age;
}
person1.prototype.gender = 'male';

const person2 = new person1('Tarun', 20);
console.log(person2);
console.log(person2.gender);
```