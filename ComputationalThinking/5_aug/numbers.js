// // need to print numbers from 01 to 010
// function IncreaseNumber(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = i.toString().padStart(3, "0");
//         console.log(str);
//     }
// }

// IncreaseNumber(10);
// console.log("--------");

// // with nested for loop function
// function IncreaseNumber(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             let str = i.toString().padStart(3, "0");
//             console.log(str);
//         }
//     }
// }

// IncreaseNumber(10);

// console.log("-----00---");

// // need to print with nest loop only once 01 t0 10
// function IncreaseNumber(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= 1; j++) {
//             let str = i.toString().padStart(2, "0");
//             console.log(str);
//         }
//     }
// }

// IncreaseNumber(10);

// console.log("---for loop-----");
// function IncreaseNumber(n) {
//   let count = 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 1; j++) {
//       let str = count.toString().padStart(2, "0");
//       console.log(str);
//       count++;
//     }
//   }
// }

// IncreaseNumber(50);

// // need without padstart 
// function IncreaseNumber(n) {
//   let count = 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 1; j++) {
//       let str = count.toString();
//       console.log(str);
//       count++;
//     }
//   }
// }

// IncreaseNumber(20);

// // star pattern with 4 column and 5 in row 


// // need with function
// function starPattern(rows, columns) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";
//     for (let j = 1; j <= columns; j++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }
// starPattern(5, 4);

// function pattern(num){
//     let pattern = ""
//     for(i = 0;i<num ;i++){
//         for(j=0;j<=num;j++){
//             pattern += i
//         }
//         pattern += "\n"
//     }
//     return pattern

// }

// console.log(pattern(5));

// //Rectangle pattern with 4 column and 5 in row with empty in between

// function rectanglePattern(rows, columns) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";
//     for (let j = 1; j <= columns; j++) {
//       if (i === 1 || i === rows || j === 1 || j === columns) {
//         str += "* ";
//       } else {
//         str += "  ";
//       }
//     }
//     console.log(str);
//   }
// }
// rectanglePattern(5, 4);

// // rectangle pattern with diagnol

// function rectangleDiagnolPattern(rows, columns) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";
//     for (let j = 1; j <= columns; j++) {
//       if (i === 1 || i === rows || j === 1 || j === columns || i === j) {
//         str += "* ";
//       } else {
//         str += "  ";
//       }
//     }
//     console.log(str);
//   }
// }
// rectangleDiagnolPattern(5, 4);

//need only diagnol and sides
// function rectangleCrossPattern(rows, columns) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";
//     for (let j = 1; j <= columns; j++) {
//       if (i === 1 || i === rows || j === 1 || j === columns || i === j || j === rows - i + 1) {
//         str += "* ";
//       } else {
//         str += "  ";
//       }
//     }
//     console.log(str);
//   }
// }
// rectangleCrossPattern(7, 7);
// fix the above issue

function rectangleCrossPattern1(rows, columns) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= columns; j++) {
      if (j === 1 || j === columns || i === j || j === rows - i + 1) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    console.log(str);
  }
}

rectangleCrossPattern1(7, 7);

console.log("---left angle triangle-----");
//left angle triangle

function leftAngleTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}
leftAngleTriangle(5);
console.log("---left angle with gap-----");
//left angle with space in between

function leftAngleTriangleWithGap(rows) {
  for (let i = 1; i <rows; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        str += "* ";
      }
      else {
        str += "  ";
      }
      
    }
    console.log(str);
  }
}
leftAngleTriangleWithGap(5);
   