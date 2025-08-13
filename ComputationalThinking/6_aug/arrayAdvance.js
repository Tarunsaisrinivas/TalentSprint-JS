// hoisting, first class citizen as fucntions,

// map, filter, reduce 

//spead operator, rest operator, destructor

const nums = [1,2,3,4]
const number = [...nums,5,6]

console.log(number)
console.log(nums)

const [a,b] = nums
console.log(b,a);

const [first, ...rest] = nums
console.log(first,rest);