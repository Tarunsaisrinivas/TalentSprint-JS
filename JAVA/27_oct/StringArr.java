import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner ;
public class StringArr {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the string array: ");
        int size = sc.nextInt();
        sc.nextLine(); 

        String[] arr = new String[size];

        System.out.println("Enter " + size + " strings:");

        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextLine();
        }

        System.out.println("The strings in the array are:");
        for (String str : arr) {
            System.out.println(str);
        }

        Arrays.sort(arr);
        System.out.println("Sorted array in Ascending order:");
        for (String str : arr) {
            System.out.print(str + " ");
        }
        System.out.println();

       

        System.out.println("Enter the string to search:");
        String search = sc.nextLine();

        int binary = Arrays.binarySearch(arr, search);

        System.out.println(binary >= 0 ? "Found at position: " + binary : "Not found");
        Arrays.sort(arr, Collections.reverseOrder());
        System.out.println("Sorted array in Descending order:");
        for (String str : arr) {
            System.out.print(str + " ");
        }
        System.out.println();
    }
}
