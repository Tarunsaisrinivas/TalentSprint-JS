### Double Array
- various ways of intializing 
```bash
int [][]n;
int []n[];
int n[][];
```
- first [] is row and second [] it is column 

- Note: Row size is mandatory and column size is optional

### Methods : 
- #### Method():
- It is a set or block of sequential statements to complete a particular task 
- #### Advantage:
- 1. Co re-usablity
- 2. Easy to debug
- 3. Reduce the program length

- Syntax:
```bash
[returntype] method_name ([datatye1 arg1,datatye2 arg2,..])
{
    [local declaration]
    statements;
    statements;
    [return (value)];
}
```
1. Without arg and without return value
2. With arg and with return value
3. Without arg and with return value
4. With arg and without return value
------------------------
- Any method can call any other method 
- By default method will return only one value to a calling method
- One of the method must call in the main()
- By default method return type is  'int'
- If method is not returning any value in return type use 'void' (empty data type)
- ### two ways of method calling:
- 1. Call by value method
- 1. Call by reference method - java will not support

### OOPS
- Object oriented programming Specification
- 4 features : 
- Encapsulation
- Data Abstraction
- Polymorphism
- Inheritance
---------------------------
- Object
- class
- data abstraction
- Encapsulation
- polymorphism
    - Data binding
        - Compile time polymorphism and Run time polymorphism
- Inheritance 
    - Message Passing 

## Object :
- Object : Run time Entity,it can refer to a person,place or anything in the real world 
Object has two things :
1. State Data 
2. Behavorial method

Ex:
Object : Dog
Data: weight,height,bread,name,color
Method():barking(),eating(),running()

-----------

- Different data types 
- int n = 10
- String = "Ram"
- Char ch = "M"
- Double age = 35.6
- Structure stud s; -data,fun()

-------
class(user defined data type) - it is blue print or template which hold the data and methods of an object in memory.

object is also called as variable of a class or instance of a class

Syntax : 
```bash
[acess specifier] class class_name
{
    # The below are called  data members
    access specifier datatype1 var1,var2
    access specifier datatype2 var1,var2 ....
    # followed by member methods
    return type method_name1(){}
    return type method_name2(){}
};

class_name Obj = new Class_name(); # object finalization
```
- Example :
```java
class Animal{
    int name,color...
    void eating(){}
    void sound(){}
}
```
- Encapsulation : Wrapping up of data and method() with its corresponding object known as encapsulation. 

- Data Abstraction : Providing necessary features and hiding unwanted features to the outside world
- Access Specifier : 
 1. Private:
 2. Public:
 3. Protected:
 4. Default:

 |      |In class | Same pack sub class |Same pack diff class | diff pack sub class | diff pack diff class |
|-------|-------|-------|-------|-------|-------|
| Private | OK | NO | NO       | NO | NO |
| Default | OK | OK | Instance | NO | NO |
| Protect | OK | OK | Instance | OK | NO |
| Public | OK | OK | Instance  | OK | Instance |


- Inheritance: Acquiring or getting all or some properties into new class from the existing old class know inheritance.

- Advantage :
1. Code re-usability
2. Extend the programming features into new features. 
3. Difference between final, finally, finalized


