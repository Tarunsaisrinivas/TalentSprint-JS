### Input output stream
- Stream is an object used to transfer the data from input unit to memory to output unit.
    - inputStream
        - Used to read the data from any input resource
    - OutputStram
        - Used to write the data on to the output resource.

> Types of Stream in java
1. Byte based stream
    - input stream
    - output stream
    Ex:1010101010100101010
2. Character Based stream
    - Reader
    - Writer 
    Ex: ABCDEFGHIJKLMNOP


> Basic Input/Output Streams
- Reading from keyboard(input)
```java
int n = System.in.read()
System.in.read(byte[])
System.in.read(byte[],int,int)
```
- Sending to console(output):
```java
System.out.println("String" +variables)
System.out.print("String" +variables)
```
> File Input Streams 
```java
FileINputStream fis = new FileInputStream("FileName");
new FileInputStream(File f);
```
Methods:
```java
int n = fis.read();
int n = fis.read(byte[]);
int n = fis.read(byte[],int,int);
```
> File Output Stream
``` java
FileOutputStream  fos =new FileOutpputStream("FileName"); 
FileOutputStream  fos =new FileOutpputStream(File); 
FileOutputStream  fos =new FileOutpputStream(File boolean);
``` 
methods:
fos.write();

> Reader 
- BufferedReader br= new BufferedReader(new InputStreamReader(Sytem.in));
- BufferedReader br= new BufferedReader(new FileReader("FileName"));

- Methods:
- int  n = br.read()
- int  n = br.read(char[],int,int)
- String s = br.readLine();
> Writer
- BufferedWriter bw= new BufferedWriter(new OutputStreamWriter(Sytem.out));
- BufferedWriter bw= new BufferedWriter(new FileWriter("FileName"));

- Methods:
- bw.write()
- bw.write(char[],int,int)
- br.write(String s);

> File:
- File is an object which is an abstract representation of file and directory pathnames
- This class presents system-independent view of hierarchical pathnames 
- File has two comnents
    - Directory pathname
    - File/subDirectory name
- File f = new File(String pathname)
- File f = new File(String dir,String )

Methods of file object 
📘 Java File Class – Important Methods

1. Creation & Deletion

createNewFile()

delete()

deleteOnExit()

mkdir()

mkdirs()

renameTo(File dest)

2. File Information

getName()

getPath()

getAbsolutePath()

getCanonicalPath()

getParent()

length()

lastModified()

3. Existence & Type

exists()

isFile()

isDirectory()

isAbsolute()

4. Permission Checks

canRead()

canWrite()

canExecute()

setReadable(boolean)

setWritable(boolean)

setExecutable(boolean)

5. Directory Listing

list()

listFiles()

listRoots()

6. Path Handling

toURI()

toPath()

7. Utility

compareTo(File pathname)

equals(Object obj)

hashCode()

> Random Access File
- It is not an input or output stream. It is an object which directly allows random reading or writing the data into the file.
- **Modes of Accessing the file** :
- "r" -> Read Mode , "rw" -> Read and Write mmode

```java
RandomAccessFile raf = new RandomAccessFile(String name,String mode)
RandomAccessFile raf = new RandomAccessFile(File name,String mode)
```

