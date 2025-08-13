// Adam Number

function isAdamNumber(num) {
    const rev = x=> Number(x.toString().split("").reverse().join(""));
    return num * num === rev(rev(num)**2);
}
console.log(isAdamNumber(12));