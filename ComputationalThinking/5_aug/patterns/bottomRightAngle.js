// right angle inverted triangle
function rightAngleTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}

rightAngleTriangle(5);
// Right-angled inverted triangle
// console.log("--------------")
// function rightAngleTriangle(n) {
//   for (let i = n; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <= i; j--) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }

// rightAngleTriangle(5);

// Right-aligned inverted triangle
console.log("--------------");
function rightAngleInvertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str += "*";
    }
    console.log(str);
  }
}

rightAngleInvertedTriangle(4);

