function User(firstName, lastName) {
  this.x = firstName;
  this.y = lastName;
  this.fn = function () {
    return `${this.x} ${this.y}`;
  };
}

const user1 = new User("Tarun", "Sai");
const user2 = new User("Srinivas", "Allam");
console.log(user1);
console.log(user2.x);
console.log(user2.fn());

// 2nd

const person = {
  firstName: "Tarun Sai Srinivas",
  LastName: "Allam",
  age: 20,
  is_married: false,
  address: {
    plot_no: 103,
    aptName: "XYZ",
  },
  city:"Nellore",
  hobbies: ["Coding", "Reading", "Sleeping"],
};

console.log(person);
console.log(Object.entries(person));
// Object.entries(person).forEach(([Key, val], index) => `${Key} : ${val}`);
// Object.entries(person).map(
//   ([Key, val], index) => `${Key} => ${index}
//  ${val}`
// );

// const newObj = Object.entries(person).map(
//   ([key, val], index) => `${key} => ${index}
//  ${val}`
// );
// console.log(newObj);
person.age = 30;
console.log(person);
Object.freeze(person);
person.Age = 40;
console.log(Object.isFrozen(person));
console.log(person);
Object.seal(person)
person.city = "Hyderabad";
person.age = 21;
console.log(Object.isSealed(person));
console.log(person);
