// console.log(...new Set(arr));
function removeDuplicates(arr){
    let s = new Set();
    let idx = 0; 
    for (let i =0; i < arr.length; i++){
        if(!s.has(arr[i])){
            s.add(arr[i])
            arr[idx++] = arr[i];
        }
    }
    return idx;
}
const arr = [1,2,2,3,3,3,3,4,4,4,5,5];
const newarr = removeDuplicates(arr);
console.log(arr.slice(0,newarr).join(' '));

