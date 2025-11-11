
public class ThreadDemo extends Thread {
	public static void main(String[] args) {
		ThreadDemo s = new ThreadDemo();
		ThreadDemo t = new ThreadDemo();
		
		System.out.println(Thread.currentThread());
		t.setName("Talent Sprint");
		s.setName("Hyd");
		
		System.out.println(t.getName());
		System.out.println(s.getName());
		t.setPriority(8);
		System.out.println(t.getPriority());
		System.out.println(s.getPriority());
		System.out.println(t.getThreadGroup());
		
	}
}

