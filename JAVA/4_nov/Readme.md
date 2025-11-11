- Topics for today : Abstract , final , interface, package

- ### abstract :
- It is keyword used to declare with the class and methods.
- Abstract : Hiding the unwanted data and providing necessary data 

```java
abstract class Demo{
    void show (){
        --- //Method defination
        ---
    }
    abstract void display(int,int); // prototype or signature of a method

}
```
- Zero Abstract methods class can declare a abstract class 
- If any class has atleast one abstract method, that class must declare as abstract. 
- Abstract class is also called as incomplete class .
- Without abstract methods, with complete implementation know as concrete class(final class)
- Abstract class will not have instance (object) of its own
- Abstract methods should be define in the inheriting classes,else that inherited classes,else that inherited class also becomes abstract .
- Abstract class can have a reference.

- Note: There are only two classes 1. Concrete class , 2. Abstract class

----------------------------------

- ### Final:
- It is keyword. final keyword ca be declare to a class, method and data
- final data (constant): Can be use,but can't update or modify
- final method: final methods can be overload but can't override.
- final class: known as complete or concrete class It can't be inherited.

-----------

- ### interface:
- It is a keyword, declare to a block looks like a class structure. 

```java
interface abc
{
    // final data with intialization or abstract methods();
}
```

- Syntax:
```java
interface <interface_name>
{
    static final variables;
    abstract methods declaration();
}
```
- By default interface memebers are public,static and final.
- Interface block is also called as complete (100% abstract).
- Interface will not have object of its own, but it can have reference.
- Interface abstract methods should be define in the next inheritance class else that class becomes abstract. 
- Implements is used to implement abstract method of interface into inherited class
- An interface can extends another interface using extendskeyword
- A class can extend only one class but it can implement multiple interfaces i.e. indirectly it supports multiple inheritance.
- That is why we call java as pure OOPL.

- ### interface extends:
- in interfaces extends is used to extend one or more interfaces into another interface
- syntax:
```java
interface A{}   interface B{}
interface NewInt extends A{}
class NewInt extends A,B{}
```