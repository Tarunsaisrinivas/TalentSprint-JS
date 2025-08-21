class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  fn() {
   return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}
var person = new Person("Alice", 30);
var person2 = person.fn();
console.log(person2);
