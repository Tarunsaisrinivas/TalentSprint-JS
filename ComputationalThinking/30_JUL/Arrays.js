// array methods
//push(), pop(), shift(), unshift(), slice(), splice(), concat(), join(), indexOf(), lastIndexOf(), includes(), find(), findIndex(), filter(), map(), reduce(), forEach(), some(), every(), sort(), reverse()
// 1. forEach()
// 2. map()
// 3. filter()
// 4. reduce()
// 5. find()
// 6. some()
// 7. every()
// 8. sort()
// 9. includes()
// 10. indexOf()
// 11. join()
// 12. reverse()
// 13. slice()
// 14. splice()
// 15. concat()
// 16. flat()
// 17. flatMap()
// 18. fill()
// 19. copyWithin()
// 20. from()
// 21. of()
// 22. keys()
// 23. values()
// 24. entries()
// 25. findIndex()
// 26. findLast()
// 27. findLastIndex()
// 28. at()
// 29. toReversed()
// 30. toSorted()
// 31. toSpliced()
// 32. toLocaleString()
// 33. toLocaleString()
// 34. toString()
// 35. toJSON()
// 36. toSource()
// 37. isArray()
// 38. fromEntries()
// 39. isArrayBuffer()
// 40. isArrayBufferView()
// 41. isArrayLike()
// 42. isArrayLikeObject()
// 43. isConcatSpreadable()
// 44. isFrozen()
// 45. isSealed()
// 46. isExtensible()
// 47. isPrototypeOf()
// 48. isSafeInteger()
// 49. isInteger()
// 50. isNaN()
// 51. isFinite()
// 52. isInteger()
// 53. isSafeInteger()
// 54. isWeakMap()
// 55. isWeakSet()
// 56. isMap()
// 57. isSet()
// 58. isWeakRef()
// 59. isProxy()

//push() - adds one or more elements to the end of an array and returns the new length of the array
let arr = [1, 2, 3];
console.log(arr.push(4, 5));
console.log("after push", arr);
console.log(arr.push(6, 7, 8));
console.log("after push", arr);
console.log(arr.push(9, 10, 11));
console.log("after push", arr);
// //pop() - removes the last element from an array and returns that element
// console.log(arr.pop()); // Output: 11
// console.log(arr); // Output: [1, 2, 3, 4,   5, 6, 7, 8, 9, 10]
// //shift() - removes the first element from an array and returns that element
// console.log(arr.shift()); // Output: 1
// console.log(arr); // Output: [2, 3, 4, 5, 6, 7, 8, 9, 10]
// //unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
// console.log(arr.unshift(1)); // Output: 11
// console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// let slicedArr = arr.slice(2, 5);
// console.log(slicedArr); // Output: [3, 4, 5]
// //splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// let splicedArr = arr.splice(2, 3, "a", "b", "c");
// console.log(splicedArr); // Output: [3, 4, 5]
// console.log(arr); // Output: [1, 2, "a", "b", "c", 6, 7, 8, 9, 10]
// //sort - sorts the elements of an array in place and returns the sorted array
// let unsortedArr = [5, 3, 8, 1, 2];
// unsortedArr.sort((a, b) => a - b);
// console.log(unsortedArr); // Output: [1, 2, 3, 5, 8]
// //custom sort
// let unsortedArr1 = [5, 3, 8, 1, 2];
// unsortedArr1.sort((a, b) => b - a);
// console.log(unsortedArr1); // Output: [8, 5, 3, 2, 1]
// //concat() - merges two or more arrays and returns a new array
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let concatenatedArr = arr1.concat(arr2);
// console.log(concatenatedArr); // Output: [1, 2, 3, 4, 5, 6]
// //join() - joins all elements of an array into a string and returns that string
// let joinedArr = arr.join("-");
// console.log(joinedArr); // Output: "1-2-a-b-c-6-7-8-9-10"
// //for in
// for( let val in arr) {
//   console.log(val); // Output: 1, 2, a, b, c, 6, 7, 8, 9, 10
// }
// //for of
// for( let val of arr) {
//   console.log(val); // Output: 1, 2, a, b, c, 6, 7, 8, 9, 10
// }
// //forEach() - executes a provided function once for each array element
// arr.forEach((element, index) => {
//   console.log(element, index); // Output: 1 0, 2 1, a 2, b 3, c 4, 6 5, 7 6, 8 7, 9 8, 10 9
// });
// //indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
// console.log(arr.indexOf(2)); // Output: 1

// //greatest number of an array
// //least number of an array
// //sum of numbers in an array
// //WAP to find the index of specific element in an array
// //second greatest number in an array
// //sum of even numbers in an array
// //sum of odd numbers in an array
// //count of an elements in array

// //to find the index of specific element in an array
// function findIndexOfElement(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log("index",findIndexOfElement(arr, 2));
