// function fibonacci(n) {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//     let a = 0, b = 1, next;
//     for (let i = 2; i <= n; i++) {
//         next = a + b;
//         a = b;
//         b = next;
//     }
//     return b;
// }
// console.log(fibonacci(10)); // 55
//  fibonacci series for the n number
// function fibonacci(n) {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10)); // 55
function printFibonacci(n) {
  let a = 0,
    b = 1;

  for (let i = 0; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

printFibonacci(10);
//71
