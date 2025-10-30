class ArthmeticOperations {
	int a =10;
	
	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public int sum(int x, int y) {
		return x + y;
	}

	public int sum(int x, int y, int z) {
		return x + y + z;
	}

	public double sum(double x, int y) {
		return x + y;
	}
	public double sum(int x, double y) {
		return x + y;
	}
	public String sum(String x, String y) {
		return x +" " +y;
	}
	public int sum(ArthmeticOperations o1,ArthmeticOperations o2) {
		return o1.a + o2.a;
	}

}

public class MethodOverload {

	public static void main(String[] args) {
		ArthmeticOperations obj = new ArthmeticOperations();
		System.out.println("Sum of int,int: "+ obj.sum(23,67));
		System.out.println("Sum of int,int,int: "+ obj.sum(23,67,89));
		System.out.println("Sum of int,double: "+ obj.sum(23,67.89));
		System.out.println("Sum of double,int: "+ obj.sum(23.67,89));
		System.out.println("Sum of String,String: "+ obj.sum("Tarun","Sai"));
//		obj.setA(4);
		ArthmeticOperations o1 = new ArthmeticOperations();
		ArthmeticOperations o2 = new ArthmeticOperations();
		o1.setA(30);
		o2.setA(50);
		System.out.println("The two objects sum " + "Obj 1 value :"+o1.sum(o1, o2)+","+"Ob2 value:"+o2.sum(o1, o2));
				
		

	}

}
