function uniqueElements(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) unique.push(arr[i]);
  }

  console.log("Unique Elements:", unique.join(" "));
}

uniqueElements([4, 5, 4, 6, 6, 7]);
