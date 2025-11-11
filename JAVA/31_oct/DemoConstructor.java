
class Constructor{
	int a,b;
	String name;
	Constructor(){ // Default Constructor
		System.out.println("From default Constructor");
	}
	Constructor(int a,int b){ //Parameterized Constructor
		this.a = a;
		this.b = b;
	}
	Constructor(String name){
		this.name = name;
	}
	void display() {
		System.out.println("a and b values : " +a+" "+b+" "+name );
	}
	Constructor(Constructor obj){
		System.out.println(obj.a +" "+ obj.b);
	}
}
public class DemoConstructor {

	public static void main(String[] args) {
		Constructor obj1 = new Constructor();
		Constructor obj2 = new Constructor();
		Constructor obj3 = new Constructor(40,69);
		obj3.display();
		Constructor obj4 = new Constructor("Tarun");
		obj4.display();
		Constructor obj5 = new Constructor(obj3);
		
		
	}

}
