import java.io.*;


public class WriteEmployee {
	public static void main(String[] args) {
		Employ emp1 = new Employ(101,"Ashok",75000.0);
		Employ emp2 = new Employ(102,"Suresh",85000.0);
		
		try(FileOutputStream fos = new FileOutputStream("employee.dat",true);
				ObjectOutputStream oos = new ObjectOutputStream(fos)){
			oos.writeObject(emp1);
			oos.writeObject(emp2);
			System.out.println("Employee object written to file ");
		}
		catch(IOException e) {
			e.printStackTrace();
		}
	}
}
