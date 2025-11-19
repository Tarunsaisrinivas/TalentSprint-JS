function mergeSorted(a, b) {
  let i = 0,
    j = 0;
  let result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  console.log("Merged Array:", result);
}

mergeSorted([1, 4, 7], [2, 3, 5, 6]);
