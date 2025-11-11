abstract class Animal{
	abstract void sound();
	abstract void eating();
	void show() {
		System.out.println("Show from abstract class");
	}
}
 class Dog extends Animal{
	void sound() {
		System.out.println("Dog sounds like boww...");
	}
	void eating() {
		System.out.println("Dog eat non veg");
	}
	
}
 class Cow extends Animal{
	void sound() {
		System.out.println("Cow sounds like Ambbaa...");
	}
	void eating() {
		System.out.println("Cow eat veg");
	}
	
}
public class DemoAbstract {
	public static void main(String[] args) {
//		Animal a = new Animal();  //error
//		Animal a; // Reference
		Animal a = new Dog();
		a.eating();
		a.sound();
		a = new Cow();
		a.eating();
		a.sound();
		a.show();
		
	}
}
