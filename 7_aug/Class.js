class Person{
    constructor(firstName,lastName,age,gender){
        this.firstName = firstName;
        this.lastName = lastName;   
        this.age = age;
        this.gender = gender;
    }
    fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    getDetails = function(){
        return `Full Name : ${this.fullName()}\n Age : ${this.age} \n Gender : ${this.gender}`
    }
}

const user1 = new Person("Tarun","Sai",20,"Male");
console.log(user1);
console.log(user1.fullName());

class Student extends Person{
    constructor(firstName,lastName,age,gender,studentId,college,depart,email,phone){
        super(firstName,lastName,age,gender);
        this.studentId = studentId;
        this.college = college;
        this.depart = depart;
        this.email = email;
        this.phone = phone;
    }
    getDetails = function(){
        return `Full Name : ${this.fullName()}\n Age : ${this.age} \n Gender : ${this.gender}\n Student Id : ${this.studentId}\n College : ${this.college}\n Department : ${this.depart}\n Email : ${this.email}\n Phone : ${this.phone}`;
    }
}

const user2 = new Student("Tarun","Sai",20,"Male",123,"ABC","CS","abc@xyz",1234567890);
console.log(user2);
console.log(user2.getDetails());