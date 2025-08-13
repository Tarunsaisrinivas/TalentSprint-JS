const person={
    firstName :"Tarun Sai Srinivas",
    LastName :"Allam",
    age : 20,
    is_married : false,
    address:{
        plot_no: 103,
        aptName:"XYZ"
    },
    hobbies : ["Coding","Reading","Sleeping"],
    fullName:function(){
        return `${this.firstName} ${this.LastName}`
    }
}
console.log(person.fullName());
const temp = JSON.stringify(person);
console.log(JSON.parse(temp));
console.log(person)
const {address} = person;
console.log(address);
const [a, ,b] = person.hobbies;
console.log(b)

for(let item of Object.keys(person)){
    console.log(person[item]);
}
// Homework 6_aug
function countLetters(str) {
  const map = new Map();
  for (let char of str) {
    if (!/[a-zA-Z]/.test(char)) continue;
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let [char, count] of map) {
    console.log(`${count}:${char} time${count > 1 ? "s" : ""}`);
  }
}

countLetters("Tarun Sai Srinivas");

// Numbers to words (Own work 6_aug)
function wordToNum(num){
    const words = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    return num.toString().split("").map(digit => words[digit]).join(" ");
}

console.log(wordToNum(123));