import java.io.File;
import java.util.Scanner;

public class DeleteFile {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the file Name");
		String input = sc.nextLine();
		File f1 = new File(input);
		if(f1.delete()) {
			System.out.println("File deleted successfully");
		}else {
			System.out.println("File not deleted");
		}
		sc.close();

	}

}
