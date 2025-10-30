class Shape{
	int r;
	int l;
	int b;
	int h;
	public double circle() {
		return Math.PI* r * r ;
	}
	public double rect() {
		return l*b;
	}
	public double cuboid() {
		return l*b*h;
	}
	
	
}
public class Shapes {
	public static void main(String[] args) {
		Shape sh = new Shape();
		sh.r=7;
		System.out.println("Area of Circle: "+sh.circle()+ " cm");
		sh.l=5;
		sh.b=4;
		System.out.println("Area of Rectangle: "+sh.rect() + " cm²");
		sh.h=10;
		System.out.println("Volume of Cuboid: "+sh.cuboid() + " cm3");
		
		
		
	}
}
