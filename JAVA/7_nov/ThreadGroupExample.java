class MyThread extends Thread {
	MyThread(ThreadGroup group, String name) {
		super(group, name);
	}

	@Override
	public void run() {
		System.out.println("Running thread: " + getName() + " | Group: " + getThreadGroup().getName());
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			System.out.println(getName() + " interrupted");
		}
	}
}

public class ThreadGroupExample {
	public static void main(String[] args) {

		ThreadGroup tg1 = new ThreadGroup("Group1");

		ThreadGroup tg2 = new ThreadGroup("Group2");

		MyThread t1 = new MyThread(tg1, "Thread-1A");
		MyThread t2 = new MyThread(tg1, "Thread-1B");
		MyThread t3 = new MyThread(tg1, "Thread-1C");

		MyThread t4 = new MyThread(tg2, "Thread-2A");
		MyThread t5 = new MyThread(tg2, "Thread-2B");
		MyThread t6 = new MyThread(tg2, "Thread-2C");

		t1.start();
		t2.start();
		t3.start();
		t4.start();
		t5.start();
		t6.start();

		
		System.out.println("\n=== Thread Group Details ===");
		tg1.list();
		tg2.list(); 
	}
}
