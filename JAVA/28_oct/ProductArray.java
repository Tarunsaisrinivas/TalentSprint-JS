// The output should show like 
// 1 2 3 -6
// 4 5 6 -120
// 2 4   -8
import java.util.Scanner;
public class ProductArray {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: "); 
        int rows = sc.nextInt();
        int[][] arr = new int[rows][];
        for (int i = 0; i < rows; i++) {
            System.out.print("Enter the number of columns for row " + (i + 1) + ": ");
            int cols = sc.nextInt(); 
            arr[i] = new int[cols];
            System.out.println("Enter the elements for row " + (i + 1) + ":");
            for (int j = 0; j < cols; j++) {
                arr[i][j] = sc.nextInt();
            }


        }
        System.out.println("The product of each row is:");        
        for (int i = 0; i < rows; i++) {
            int product = 1;
            for (int j = 0; j < arr[i].length; j++) {
                product *= arr[i][j];
            }
            System.out.println("Product of row " + (i + 1) + ": " + product);
        }
       System.out.println("Table format");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + "");
            }
            int product = 1;
            for (int j = 0; j < arr[i].length; j++) {
                product *= arr[i][j];
            }
            System.out.print("-"+product);
            System.out.println();
        }        
        
        sc.close();
	}
}
