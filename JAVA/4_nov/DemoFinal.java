class Sprint{
	final int a = 100;
	int b = 10;
	final void show() {
//		int c = a+b;
//		a += a; you can't assigning final data 
		System.out.println("a value is : "+a);
//		System.out.println("c value is :" +c);
	}
	final int show(int x,int y) {
		return x+y;
	}
}
//class abc extends Sprint{
//	final int show(int x, int y) {
//		return x+y;
//	}
//}
public class DemoFinal {
	public static void main(String [] args) {
		Sprint f = new Sprint();
		f.show();
		System.out.println(f.show(4, 5));
	}
}
