// need to show files in a directory 
import java.io.File;
import java.util.Scanner;

public class ShowFiles {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the directory name : ");
		String input = sc.nextLine();
		File folder = new File(input);
		File[] listOfFiles = folder.listFiles();
		for (File file : listOfFiles) {
			if (file.isFile()) {
				System.out.println(file.getName());
			}
		}
		sc.close();
	}
}