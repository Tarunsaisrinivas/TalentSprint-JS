import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class DemoIO {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
//		FileOutputStream fos = new FileOutputStream("Talent.txt",true);
//		System.out.println("Enter data into a file");
//		String data = sc.nextLine();
//		byte[] b = data.getBytes();
//		fos.write(b);
//		System.out.println("Data Written into the file");
//		System.out.println("File created at: " + new File("Talent.txt").getAbsolutePath());
//		fos.close();
//		 Did with while loop for new lines
		FileOutputStream fos = new FileOutputStream("Talent.txt");
	    System.out.println("Enter data to write into the file (type 'exit' to finish):");
	        while (true) {
	            String input = sc.nextLine();
	            if (input.equalsIgnoreCase("exit")) {
	                break;
	            }
	            byte[] b = input.getBytes();
	            fos.write(b);
	            fos.write(System.lineSeparator().getBytes()); 
	        }
	        fos.close();
		//Need with buffer reader
		  FileReader fileReader = new FileReader("Talent.txt"); 
		  BufferedReader bufferedReader = new BufferedReader(fileReader);
		  String line;
		  System.out.println("Reading data from the file:");
		  while ((line = bufferedReader.readLine()) != null) {
		    System.out.println(line);
		  }
		  bufferedReader.close();

//		  FileInputStream fis = new FileInputStream("Talent.txt");
//	        System.out.println("Reading data from the file:");
//	        //Method 1
//	        byte[] b1 = fis.readAllBytes();
//	        String str = new String(b1);
//	        System.out.println(str);
//	        //Method 2
////	        int i;
////	        while ((i = fis.read()) != -1) {
////	            System.out.print((char) i);
////	        }
//	        fis.close();
	        sc.close();

	}
}
