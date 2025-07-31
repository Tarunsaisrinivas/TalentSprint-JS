//second least number in an array
function secondLeastNumber(arr) {
  if (arr.length < 2) return null;
  let first = Infinity,
    second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second === Infinity ? null : second;
}
console.log(
  "Second least number",
  secondLeastNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
