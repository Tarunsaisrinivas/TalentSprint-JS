function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row);
  }
}

rightTriangle(5);

console.log("---Inverted Triangle---");
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row);
  }
}

invertedTriangle(5);

console.log("---Hollow Right Triangle---");
function hollowRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === n) row += "* ";
      else row += "  ";
    }
    console.log(row);
  }
}

hollowRightTriangle(5);

console.log("---Left Aligned Triangle---");
function leftAlignedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += "  ";
    for (let j = 1; j <= i; j++) row += j+" ";
    console.log(row);
  }
}
leftAlignedTriangle(5);

console.log("---Hollow Pyramid---");
function hollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1 || i === n) row += "*";
      else row += " ";
    }
    console.log(row);
  }
}

hollowPyramid(5);

console.log("---Diamond Pattern---");
function diamond(n) {
  // top
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";
    console.log(row);
  }
  // bottom
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";
    console.log(row);
  }
}

diamond(5);

console.log("---Heart Pattern---");
function heart(n = 6) {
  // Top
  for (let i = n / 2; i < n; i += 2) {
    let row = "";
    for (let j = 1; j < n - i; j += 2) row += " ";
    for (let j = 1; j <= i; j++) row += "*";
    for (let j = 1; j <= n - i; j++) row += " ";
    for (let j = 1; j <= i; j++) row += "*";
    console.log(row);
  }
  // Bottom
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 0; j < n - i; j++) row += " ";
    for (let j = 1; j <= i * 2 - 1; j++) row += "*";
    console.log(row);
  }
}

heart();

console.log("---X Cross Pattern---");
function cross(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let row = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j === i || j === 2 * n - i) row += "*";
      else row += " ";
    }
    console.log(row);
  }
}

cross(5);

console.log("---Zig-Zag Pattern---");
function zigZag(length = 15) {
  for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= length; j++) {
      if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) row += "*";
      else row += " ";
    }
    console.log(row);
  }
}

zigZag();

console.log("---Butterfly Pattern---");
function butterfly(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    for (let j = 1; j <= 2 * (n - i); j++) row += "  ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row);
  }

  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    for (let j = 1; j <= 2 * (n - i); j++) row += "  ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row);
  }
}

butterfly(5);
