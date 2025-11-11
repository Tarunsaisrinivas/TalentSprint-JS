// Ride sharing application of Ola with interface ride service with methods book ride, calculate fare, startRide, endRide with implement the interface carRide, BikeRide, AutoRide
interface RideService {
	void bookRide(String pickupLocation, String dropLocation);
	double calculateFare(String pickupLocation, String dropLocation,int distance);
	void startRide();
	void endRide();
	int base = 40;
}
class CarRide implements RideService {
	public void bookRide(String pickupLocation, String dropLocation) {
		System.out.println("Car ride booked from " + pickupLocation + " to " + dropLocation);
	}
	public double calculateFare(String pickupLocation, String dropLocation,int distance ) {
		return distance * base ;
	}
	public void startRide() {
		System.out.println("Car ride started");
	}
	public void endRide() {
		System.out.println("Car ride ended");
	}
}
class BikeRide implements RideService {
	public void bookRide(String pickupLocation, String dropLocation) {
		System.out.println("Bike ride booked from " + pickupLocation + " to " + dropLocation);
	}
	public double calculateFare(String pickupLocation, String dropLocation,int distance) {
		return distance * base;
	}
	public void startRide() {
		System.out.println("Bike ride started");
	}
	public void endRide() {
		System.out.println("Bike ride ended");
	}
}
class AutoRide implements RideService {
	public void bookRide(String pickupLocation, String dropLocation) {
		System.out.println("Auto ride booked from " + pickupLocation + " to " + dropLocation);
	}
	public double calculateFare(String pickupLocation, String dropLocation,int distance) {
		return distance*base;
	}
	public void startRide() {
		System.out.println("Auto ride started");
	}
	public void endRide() {
		System.out.println("Auto ride ended");
	}
}
public class InterfaceTravel {
	public static void main(String[] args) {
		RideService myRide = new CarRide();
		myRide.bookRide("Airport", "Downtown");
		System.out.println("Fare: ₹" + myRide.calculateFare("Airport", "Downtown",4));
		myRide.startRide();
		myRide.endRide();
		
		myRide = new BikeRide();
		myRide.bookRide("Mall", "Park");
		System.out.println("Fare: ₹" + myRide.calculateFare("Mall", "Park",9));
		myRide.startRide();
		myRide.endRide();
		
		myRide = new AutoRide();
		myRide.bookRide("Station", "Hotel");
		System.out.println("Fare: ₹" + myRide.calculateFare("Station", "Hotel",10));
		myRide.startRide();
		myRide.endRide();
	}
}