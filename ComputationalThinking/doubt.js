class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.fn = () => {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    };
  }
}

var person = new Person("Alice", 30);
var person2 = person.fn;
person2(); 
