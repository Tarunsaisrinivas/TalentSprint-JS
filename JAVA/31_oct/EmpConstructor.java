class Constructor1{
	private int eid;
	private double salary;
	private String name;
	public Constructor1(int eid, double salary, String name) {
//		super();
		this.eid = eid;
		this.salary = salary;
		this.name = name;
	}
	public Constructor1(double salary) {
//		super();
		this.salary = salary;
	}
	public Constructor1(int eid, String name) {
//		super();
		this(8000); //this constructor to call another constructor
		this.eid = eid;
		this.name = name;
	}
	@Override
	public String toString() {
		return "Constructor [eid=" + eid + ", salary=" + salary + ", name=" + name + "]";
	}
	
	
}
public class EmpConstructor {
    public static void main(String[] args) {
        Constructor1 obj1 = new Constructor1(101, "Tarun");
        System.out.println(obj1);
    }
}