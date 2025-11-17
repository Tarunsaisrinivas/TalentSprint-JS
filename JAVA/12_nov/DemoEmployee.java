import java.util.ArrayList;
import java.util.LinkedList;

class Emp1 {
    int empId;
    String eName;

    Emp1(int empId, String eName) {
        this.empId = empId;
        this.eName = eName;
    }

    public String toString() {
        return "EmpID: " + empId + ", Name: " + eName;
    }
}

public class DemoEmployee {
    static ArrayList<Emp1> empArrayList = new ArrayList<>();
    static LinkedList<Emp1> empLinkedList = new LinkedList<>();

    public static void add(int id, String name) {
        Emp1 emp = new Emp1(id, name);
        empArrayList.add(emp);
        empLinkedList.add(emp);
    }

    public static void remove(int id) {
        empArrayList.removeIf(e -> e.empId == id);
        empLinkedList.removeIf(e -> e.empId == id);
    }

    public static void modify(int id, String newName) {
        empArrayList.stream().filter(e -> e.empId == id).findFirst().ifPresent(e -> e.eName = newName);
        empLinkedList.stream().filter(e -> e.empId == id).findFirst().ifPresent(e -> e.eName = newName);
    }

    public static void display() {
        System.out.println("ArrayList:");
        empArrayList.forEach(System.out::println);
        System.out.println("LinkedList:");
        empLinkedList.forEach(System.out::println);
    }

    public static void main(String[] args) {
        add(101, "Tarun");
        add(102, "Sai");
        display();

        modify(101, "Tarun Kumar");
        remove(102);
        display();
    }
}
