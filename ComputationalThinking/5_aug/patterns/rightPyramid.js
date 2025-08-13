// pyramid pattern toright side 
// Right pyramid pattern
function Pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}

Pyramid(5);

//Right Pyramid
function RightPyramid(n){
  for (let i = n; i >= 1; i--) {
    let str = "";
    let count = 1;
    for (let j = 1; j <= 2 * n; ++j) {
      if (i + j >= n + 1 && i >= j - n + 1) {
       
        str += "*" + " ";
        count++;
      } else {
       
        str += "  ";
      }
    }

    console.log(str);
  }
}

RightPyramid(5);