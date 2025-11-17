import java.util.ArrayList;
import java.util.Iterator;

public class DemoArrayList2 {
	public static void main(String[] args) {
		ArrayList<String> fruits = new ArrayList<>();
		fruits.add("Apple");
		fruits.add("Banana");
		fruits.add("Orange");
		fruits.add("Grapes");
		fruits.add("Mango");
		fruits.add("Mango");
		
		System.out.println(fruits);
		for (String fruit:fruits)
			System.out.println(fruit);
		for(int i =0;i<fruits.size();i++)
			System.out.println(fruits.get(i));
		System.out.println("Using lamda expression");
		fruits.forEach(item -> System.out.println(item));
		int i =0;
		System.out.println("Using While");
		while(i < fruits.size())
			System.out.println(fruits.get(i++));
		System.out.println("Iterator");
		Iterator<String> iterator = fruits.iterator();
		while(iterator.hasNext()) {
			String fruit = iterator.next();
				System.out.println(fruit);
		}
		
//		fruits.remove("Orange");
		fruits.remove(3);
		System.out.println(fruits);
		fruits.add(2,"Kiwi");
		System.out.println(fruits);
		// create new user list and add and combine the fruits and users
		System.out.println("-----------------------------------------------------------");
		ArrayList<String> users = new ArrayList<>();
		users.add("John");
		users.add("Jane");
		users.add("Jack");
		users.add("Jill");
		System.out.println("users :"+users);
		fruits.addAll(users);
		System.out.println(fruits);
		
		System.out.println("--------------");
		fruits.set(3,"Peach");
		System.out.println(fruits);
		fruits.clear();
		System.out.println(fruits);
		System.out.println(fruits.isEmpty());
	}
}
