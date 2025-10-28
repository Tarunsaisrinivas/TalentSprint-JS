// working the below 
//import java.util.Scanner;
//public class DoubleArray {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        System.out.print("Enter the number of rows: ");
//        int rows = sc.nextInt();
//        System.out.print("Enter the number of columns: ");
//        int cols = sc.nextInt();
//
//        int[][] arr = new int[rows][cols];
//
//        System.out.println("Enter the elements of the array:");
//
//        for (int i = 0; i < rows; i++) {
//            for (int j = 0; j < cols; j++) {
//                arr[i][j] = sc.nextInt();
//            }
//        }
//
//        System.out.println("The elements in the array are:");
//        for (int i = 0; i < rows; i++) {
//            for (int j = 0; j < cols; j++) {
//                System.out.print(arr[i][j] + " ");
//            }
//            System.out.println();
//        }
//        sc.close();
//    }
//}

// doubt code 
import java.util.Scanner;
 public class DoubleArray {
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
         System.out.println("The elements in the array are:");
         for (int i = 0; i < rows; i++) {
             for (int j = 0; j < arr[i].length; j++) {
                 System.out.print(arr[i][j] + " ");
             }
             System.out.println();
         }
         sc.close();
     }
 }