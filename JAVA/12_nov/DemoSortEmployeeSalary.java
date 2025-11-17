import java.util.*;

// Employee1 class
class Employee1 {
    String name;
    double salary;

    Employee1(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        return "Employee{name='" + name + "', salary=" + salary + "}";
    }
}

// Comparator for Employee1
class SalaryComparator implements Comparator<Employee1> {
    public int compare(Employee1 e1, Employee1 e2) {
        return Double.compare(e1.getSalary(), e2.getSalary());
    }
}

// Main class
public class DemoSortEmployeeSalary {
    public static void main(String[] args) {
        List<Employee1> employees = new ArrayList<>();
        employees.add(new Employee1("Alice", 75000.0));
        employees.add(new Employee1("Bob", 50000.0));
        employees.add(new Employee1("Charlie", 60000.0));

        System.out.println("Before sorting:");
        for (Employee1 e : employees) {
            System.out.println(e);
        }

        // Sort by salary using the comparator
        Collections.sort(employees, new SalaryComparator());

        System.out.println("\nAfter sorting by salary:");
        for (Employee1 e : employees) {
            System.out.println(e);
        }
    }
}