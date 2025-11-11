class ThreadDemo1 extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + " is running: " + i);
        }
    }
}
public class ThreadRunnable {
    public static void main(String[] args) {
        ThreadDemo1 s = new ThreadDemo1();
        ThreadDemo1 t = new ThreadDemo1();

        System.out.println("Main thread: " + Thread.currentThread());

        t.setName("Talent Sprint");
        s.setName("Hyd");

        System.out.println("Thread t name: " + t.getName());
        System.out.println("Thread s name: " + s.getName());

        t.setPriority(8);

        System.out.println("Thread t priority: " + t.getPriority());
        System.out.println("Thread s priority: " + s.getPriority());

        System.out.println("Thread t group: " + t.getThreadGroup());

        
        t.start();
        s.start();
    }
}