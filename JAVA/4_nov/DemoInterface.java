// having vehicle , gps  interfaces and  class smartcar implements vehicle , gps

interface Vehicle {
	void start();
	void stop();
}
interface GPS {
	
	void navigate(String destination);
}
class SmartCar implements Vehicle,GPS{
	public void start() {
		System.out.println("SmartCar started");
	}
	public void stop() {
		System.out.println("SmartCar stopped");
	}
	public void navigate(String destination) {
		System.out.println("Navigating to " + destination);
	}
}
public class DemoInterface {
	public static void main(String[] args) {
		SmartCar myCar = new SmartCar();
		myCar.start();
		myCar.navigate("Central Park");
		myCar.stop();
	}
}
