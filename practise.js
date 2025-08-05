function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

function printPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(50); 


//    let str1 = 'A'.charCodeAt(0)/'A'.charCodeAt(0);
//     let str2 = 'd'.charCodeAt(0);
//     for (let i = str1; i < str2; i++){
//        console.log(i) ;
//     }
