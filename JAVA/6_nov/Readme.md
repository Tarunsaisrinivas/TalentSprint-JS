### String

- It is an object of constant with group of characters.It will not allow to modify as it is immutable.Every modification creates a new String Object.

- creating string:

```java
String s = null;
String s1 = "Friend";
String s2 = new String("Friend");
String s3 = s2;
String s4 = new String(s2);

String s5 = new String(char[],int,int);
String s6 = new String(char[],int,int);
```

- String 1 == String2
  - compares references
- String1.equals(String2);
- String1.equalsIgnoreCase(String2);
  - Compares the values of two strings if equal returns true else returns false

---

- ### Methods:

```java
String s1 = s.concat(String new)
int n = s.indexOf(char)
char c = s.charAt(int)
int n = s.length()
String s1 = s.replace(char old,char new)
String s1 = s.substring(int start, int end)
String s1 = s.trim()
byte[] b = s.getBytes()
char[] c = s.toCharArray()
String[] s1 = s.split(String delimiter)
```

- ### String Buffer
- String Buffer implements a mutable sequence of characters.
- String Buffer can be modified
-

- Methods:

```java
sb.append(String str)
sb.delete(int start, int end)
sb.deleteCharAt(int index)
sb.setCharAt(int index ,char ch)
sb.insert(int offset,String str)
sb.replace(int start, int end, String str)
sb.reverse()
```

1. Wrapper Classes
2. String
3. StringBuffer
4. StringBuilder
5. Serializable

---

### Exceptions :

- Run time errors
  <img src = "https://scaler.com/topics/images/errors-vs-exception-in-java-image-introduction.webp" style="width:100%;height:100%">
  <img src = "./programming_errors.tldr">

### Exception handling :
- Exception is logical error/runtime error which abrupt the execution of application.
-  Depending on provided values in the statement, an exception may or may not occur
        - Ex: c = a/b;
- If any statemen is going throw an Exception, it should be properly handled to overcome the abruption of the application.


#### checked Exception :
- Examples
    1. IO Exception
    2. RemoteException
    3. SocketException
    4. AllUserDefined
    5. Exceptions
#### Unchecked Exception:
- Examples:
    1. ArithmeticException
    2. FileNotFoundException
    3. NumberFormatException
    4. ArrayIndexOutOfBounds
    5. Exception
### Try :
- It is a block of statements which may throw exceptions.
- The statements throws an exception or exceptions raising must be there in try block to handle it.
- One try block can have any number of handlers.

### Catch:
- It is an handler of exception thrown from the try block.
- catch should immediately follow the try block
- One try can have one catch or any number of catches but they should be continues.

### Finally:
- It is used to exceute a code at any case ie., either exception is thrown or not thrown from try block.
- finally can be there immediately after try block or if handlers are provided then this can be written after catch block

- Syntax :
```java
try {...}
finally{...}

try{...}
catch(Exception e){...}
finally{...}
```

#### Throw
- It is used to throw an object of exception type or any user defined exceptions .
- 'throw' must be used from try block only to handle it properly.
   Exception e = new Exception();
   Throw e;
   or
   throw new Exception();

- 'throws' is usedto specify Exception in method declaration from where the checked exceptions are thrown .
 - Syntax:
```java
 returntype method(Args) throws CheckedException
 {
  statements;
 }
```
- #### User Defined Exceptions :
- A class Extended from exception by overriding the toString() method.
- These are used to raise an exception on some conditions, restrictions, validations etc.
- All the user defined exceptions are Checked Exception 