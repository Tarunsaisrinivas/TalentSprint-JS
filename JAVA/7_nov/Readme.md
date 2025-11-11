- Refere to the image thread.tldr

### Threads:

- Thread is a code of execution in a program .
- Every thread is an independent wth its own path of execution.
- JVM allows to execute more than one Thread concurrently which is called ias MultiThreading..
- Every Thread will have a Name, Thread Group and priority by default.
  ### Thread Attributes
  - MAX_PRIORITY -> 10
  - MIN_PRIORITY -> 1
  - NORM_PRIORITY -> 5

### Multi Thread:

- If an application is having more than one path of executions.

- One process having multiple pieces of codes with their own path of executions.

- ### Context Switching :
- It is the mechanism implemented in multi tasking or multi threading.

### Scheduling:

- Scheduling is process of switching between the tasks.
- Pre-emptive Multi Tasking : Priority based.
- Time Slicking : divides available time among aailable tasks with same priority.
- Cooperative Environment: Voluntarily giveup the control (yielding).

### Thread Scheduling

- No Standard scheduling is defined in multi threading.
- It depends on operating system schedulers.
- Hence try to control from aplication tather than depending on environment.
- ### Thread States
- Thread Registration
  <!-- Open ThreadStates.tldr file -->

- Preparation of thread code has two types
  - 1. Implements Runnable
  - 2. Extends Thread
- override a method :

```java
public void run()
{
    statements;
}
```
- ### Runnable Implementation 

```java
class NewThread implements Runnable
{
    // Variable declaration;
    NewThread(){
        Variable initialisation;
    }
    public void run()
    {
        thread code
    }
} 
// Thread of Runnable type:
// Creating an instance of runnable object
NewThread r = new NewThread();
// converting runnable object into Thread
Thread t = new Thread(r);
// Registering a Thread
t.start();
```

- Extending a Thread : 
NewThread t = new NewThread();
t.start();

- Thread Constructors :
- Thread()
- Thread(String)
- Thread(Runnable)
- Thread(Runnable,String)
- Thread(ThreadGroup)
- Thread()
- Thread()
- Thread()

- Thread Methods :
Thread t = Thread.currentThread()
t.start()
t.join()
t.sleep(long time)
t.yield()

t.setPriority(int)
t.setDaemon(boolean b)
String name = t.getName()
boolean b = t.isAlive()

- Daemon Thread :
- These are threads which will execute in background without our knowldge
- If Daemon threads are the only threads runnin in JVM then quits since there are no threads to which services can be given. 
- Child threads created from daemon thread will become daemon threads 
    - Example :garbage collector
    - Method :setDaemon(true)

- Inter Thread Communication:
- Communication between threads in a multithreading system is important. A Thread which share resoursces must, communicate in order to coordinate their efforts, as well as to prevent situations in which one process disrupts another. In instances where two or more threads are working together, Shunchronization becomes an issue.
1. Resources sharing (wait & notify)
2. Process synchronisation (Synchrozation)
<!-- 
Inter process communication : http://www.cne.gmu.edu/modules/ipc/term-index.html -->

- Thread Racing/Monitor
- All the threads trying to access the same resource is called Thread Racing.
- This Racing leads in mixed results of different threads as 