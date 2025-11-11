```java
int n;
n=10  //Assigning

int n =10; //Intializing
Student s = new Student();//Intializing
s = new Student();//Assigning
```
- Constructors : Constructors are a special member methods. Which have the same name of class 

- Syntax : 
```java
class Cons{
    int a,b;
    void reads(){}
    Cons(){}
}
```
-----------------
- ### Type of Constructors:
- 1. Default Constructor
    - a. Constructor which does not htave any parameters
    - b. We can have only one default constructor in a class 
    - Note : By default java will support default Constructor
- 2. Parameterised Constructor:
    - a.Constructor which have parameters
    - b. 'n' no of parameterised cons we can have in a class with difference in their signatures 
        - Example :
        1. Cons(int,init){}
        2. Cons(int,String){}
        3. Cons (obj1,obj2){}
- 3. Copy Constructor :
    - a. Constructor which have object as their parameters where coping one object value into another object. 
        - Cons(obj1,obj2){}
-------------------------------------
1. Why Constructors? 
- It is used to intialize the objects. It will alllocate the dynamic memory 

2. What is the difference between method/cons
- 1. Constructor does not have return type
- 2. Constructor will invoke automatically as and when we initialize the object
- 3. Constructor will invoke only once at the time of object creation 
- 4. Constructor overloading, belongs to compile time polymorphism.
- 5. this () <!--This constructor it is used to call another Constructor with the same class -->
----------------------
- this
- static - data,method,inner class , import 

- instance or object (non static data/method) - data /method
- static data - data / method (also called as class members)
-----------
- ### Static :
- Static variables are class variable but not instance variable which are declared and initialised once in its life and shared by any no.of instances.

- Static Method or variables can be used with class name without creating an instance or with reference variables of instances . 
    - Ex : Math.sqrt(5);

- ### Static features in java
- Static Variables : 
    - Belong to the class, not instaces.shared across all objects.
    - Static data can access in non-static method.
    - Non static data can't access in static method 
- Static Methods :
    - Can be called without creating an object.Cannot access non-static members.
    - Non static methods can't call in the static methods
- Static Blocks :
    - Used for static initialization of static variables.Executes once when class loads.
- Static Classes :
    - Only nested classes can be static . Useful for utility/helper classes.
- Static imports :
    - Allows importing static members so they can be used without class prefix 
- Main Method : 
    - public static void main(String[] args) - entry point of java programs 

------------------------
- ### Inheritance : 

- Getting or acquiring all or some properties into new class from the existing old class known as inheritance.

- Ex : parent and child 
- Syntax : 
```java 
class Parent/Base/Super
{
    // data members
    // member methods
}

class Child/derived/subclass extends parent
{
    // data members
    // member methods
}
```
- ### Types of inheritance : 
- Single Inheritance 
- Multiple Inheritance 
- Multi level Inheritance
- <img src= "https://jaro-website.s3.ap-south-1.amazonaws.com/2025/05/1_Yu4tT4bfw8un-GP7N4bAtg.webp" style="width:100%;height:100%" />
