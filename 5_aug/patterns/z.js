function letterZ(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1) {
        str += "+";
      } else if (j === cols - i - 1) {
        str += " +";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

letterZ(5, 5);
function letterA(height) {
  let width = height * 2 - 1; // Wider for symmetry
  let mid = Math.floor(height / 2);

  for (let i = 0; i < height; i++) {
    let str = "";
    for (let j = 0; j < width; j++) {
      if (
        j === mid - i || // Left diagonal
        j === mid + i || // Right diagonal
        (i === mid && j > mid - i && j < mid + i) // Horizontal bar
      ) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

letterA(7);

// letter O 

// sorting values in an array

let array = [1,2,3,7,9,10,22,4]
let a = array.sort((b,a) => b-a)
console.log(a)