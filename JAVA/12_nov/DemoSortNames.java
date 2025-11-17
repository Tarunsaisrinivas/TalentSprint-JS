import java.util.*;

// Student class
class Stud1 {
    String name;
    int age;

    Stud1(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter methods
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    // toString method for easy printing
    @Override
    public String toString() {
        return "Stud{name='" + name + "', age=" + age + "}";
    }
}

// Comparator to sort by name
class CustomerSortingComparator implements Comparator<Stud1> {
    public int compare(Stud1 customer1, Stud1 customer2) {
        return customer1.getName().compareTo(customer2.getName());
    }
}

// Main class
public class DemoSortNames {
    public static void main(String[] args) {
        List<Stud1> students = new ArrayList<>();
        students.add(new Stud1("Alice", 22));
        students.add(new Stud1("Charlie", 20));
        students.add(new Stud1("Bob", 21));

        System.out.println("Before sorting:");
        for (Stud1 s : students) {
            System.out.println(s);
        }

        // Sort using custom comparator
        Collections.sort(students, new CustomerSortingComparator());

        System.out.println("\nAfter sorting by name:");
        for (Stud1 s : students) {
            System.out.println(s);
        }
    }
}