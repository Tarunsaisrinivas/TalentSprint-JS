function mostFrequent(arr) {
  let maxCount = 0;
  let mostFreq = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostFreq = arr[i];
    }
  }

  console.log("Most Frequent Element:", mostFreq);
  console.log("Frequency:", maxCount);
}

mostFrequent([5, 2, 7, 5, 5, 7, 2, 2, 2]);
