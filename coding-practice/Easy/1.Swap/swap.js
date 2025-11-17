// method 1 :

let a = 14;
let b = 19;
console.log("Before Swap: a =", a, ", b =", b);

a = a + b; // a = 32
b = a - b; // b = 13
a = a - b; // a = 19
console.log("After Swap: a =", a, ", b =", b);

// method 2 :
let c = 23;
let d = 18;
console.log("Before Swap: c=", c, "d = ", d);

[c, d] = [d, c];
console.log("After Swap: c =", c, ", d =", d);
