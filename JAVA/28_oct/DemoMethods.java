
public class DemoMethods {
	public static void hello() {
		System.out.println("Hello! World");
	}
	
	public static int sum(int x, int y) {
		
//		int z = x +y;
//		return z;
		return (x+y);
	}
	public static void mul(int x, int y) {
		System.out.println("Mul is "+ x*y);
	}
	public static void main(String[] args) {
		hello();
		System.out.println("Sum is "+sum(30,40));
		int a = 5;
		int b = 8;
		hello();
		mul(a,b);
		hello();
	}
}
