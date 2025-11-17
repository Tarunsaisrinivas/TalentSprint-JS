// Function to sort an array of numbers in ascending order and descending order without sort method
function sortArray(arr) {
  // Ascending order
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]; // temp stores the value of arr[i] which is greater
        arr[i] = arr[j]; // arr[i] gets the smaller value arr[j]
        arr[j] = temp; // arr[j] gets the value stored in temp
      }
    }
  }
  console.log("Ascending Order: ", arr);
  // Descending order Takes more steps in this
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] < arr[j]) {
  //         let temp = arr[i]; // temp stores the value of arr[i] which is smaller
  //         arr[i] = arr[j]; // arr[i] gets the larger value arr[j]
  //         arr[j] = temp; // arr[j] gets the value stored in temp
  //       }
  //     }
  //   }
  let desc = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    desc.push(arr[i]);
  }
  console.log("Descending Order: ", desc);
}

sortArray([5, 3, 8, 1, 2, 7]);
// sortArray([12, 45, 23, 67, 34, 89]);

// 120 steps
