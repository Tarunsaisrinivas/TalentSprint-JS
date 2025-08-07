

let array = [21, 22, 45, 32, 56, 90, 23, 81, 11];
// console.log(asscending(array));
console.log(descending(array));

function asscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length ; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function descending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length ; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

