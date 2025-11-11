### Super:
- 'super' is a keyword used to refer to hidden variables of super class from sub class.
    - super.a = a;
- It is used to call a constructorof superclass fromconstructorof sub class which should be first statement.
    - super(a,b);
- It is used to call a super class method from sub class method to avoid redundancy of code 
    - super.addNumber(a,b);

// single inheritance , multilevel inheritance, super keyword usage ------ 

### Abstract :
- A class with no complete implementation is called abstract class .
- A class which has one or more methods that class is known as abstract class
- A class with zero abstract methods can be declared as abstract class.
- Abstract classes can't be instantiated.
-  A class can extend an abstract class and an extended class should provide the implementation for all the abstract methods of its super class otherwise the class itself will become abstract .