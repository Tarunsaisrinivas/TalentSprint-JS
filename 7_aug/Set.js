const arr = [1,2,1,5,4,8,9,4,5,1,2,3,4,1]

const set = new Set();
set.add(10);
set.add(20);
set.add(10);
set.add(30);
set.add(20);
set.add(10);
set.clear();
console.log(set);

const set1 = new Set([1,2,3,4,5]);
const set2 = new Set([4,5,6,7,8,9]);
console.log(set1.union(set2));
console.log(set1.intersection(set2));
console.log(set1.difference(set2));

