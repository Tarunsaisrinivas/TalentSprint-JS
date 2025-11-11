import java.io.*;

public class Employ implements Serializable {
	private int id;
	private String name;
	private double salary;
	
	public Employ(int id, String name, double salary) {
		this.id = id;
		this.name= name;
		this.salary= salary;
	}
	

	@Override
	public String toString() {
		return "Employ [id=" + id + ", name=" + name + ", salary=" + salary + "]";
	}


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		

	}

}
