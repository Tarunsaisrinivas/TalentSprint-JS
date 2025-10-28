import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class ArrayNew {
    public static void main(String[] args) {
    		Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = sc.nextInt();

        Integer[] arr = new Integer[size]; 

        System.out.println("Enter " + size + " elements:");

        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.println("The elements in the array are:");
        for (int i : arr) { //for each loop logic
        	System.out.println(i);
		}
//        for (int i = 0; i < size; i++) {
//            System.out.println(arr[i]);
//        }
        
     
        Arrays.sort(arr);
        System.out.println("Sorted array in Ascending:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();

       
        Arrays.sort(arr, Collections.reverseOrder());
        System.out.println("Sorted array in Descending:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();

        
        

        
        
        System.out.println("Enter the element to search");
        int search = sc.nextInt();
        
        int binary = Arrays.binarySearch(arr, search);
        
//        if(binary>=0) {
//        	System.out.println("The element is found at position"+ binary);
//        }
//        else {
//        	System.out.println("NOT FOUND");
//        }
         System.out.println(binary>=0 ? binary : "Not found" );
//        System.out.println("Searched element in the position of " + binary);
        

        
    }
}
